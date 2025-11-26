import { NextResponse } from "next/server";
import cloudinary from "@/app/lib/cloudinary";
import { Db_connection } from "@/app/libs/Db_connection";
import PatchOrder from "@/app/model/PatchOrder";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  await Db_connection();

  try {
    const formData = await request.formData();
    const gettoken = req.cookies.get("AuthToken")?.value;

    const jwtdecode = jwt.verify(gettoken, "Abdullah");
    // Get all fields
    const width = formData.get("width");
    const height = formData.get("height");
    const product = formData.get("product") || "Embroidered Patches";
    const backing = formData.get("backing");
    const quantity = formData.get("quantity");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const instructions = formData.get("instructions") || "";
    const source = formData.get("source") || "";
    const budget = formData.get("budget") || "";
    const file = formData.get("file");

    if (
      !width ||
      !height ||
      !backing ||
      !quantity ||
      !name ||
      !email ||
      !phone ||
      !file
    ) {
      return NextResponse.json(
        { message: "Please fill all required fields including file" },
        { status: 400 }
      );
    }

    // Convert file to buffer & base64
    const buffer = await file.arrayBuffer();
    const base64String = Buffer.from(buffer).toString("base64");
    const dataUri = `data:${file.type};base64,${base64String}`;

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "nextjs-uploads",
    });

    // Save full order to MongoDB
    const newOrder = new PatchOrder({
      width,
      height,
      product,
      backing,
      quantity,
      name,
      email,
      phone,
      instructions,
      source,
      budget,
      file: result.secure_url,
      user_id: jwtdecode_id,
    });

    await newOrder.save();

    return NextResponse.json({
      message: "Order submitted successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { message: "Error submitting order", error: error.message },
      { status: 500 }
    );
  }
}
