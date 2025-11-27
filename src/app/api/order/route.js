import { NextResponse } from "next/server";
import cloudinary from "../../libs/cloudinary";
import { Db_connection } from "../../libs/Db_connection";
import PatchOrder from "../../model/order";
import jwt from "jsonwebtoken";

export async function POST(request) {
  await Db_connection();

  try {
    const formData = await request.formData();

    // Get all fields from form data
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
    const colors = formData.get("colors") || "";
    const urgency = formData.get("urgency") || "";

    // Get all files
    const files = formData.getAll("files");

    // Validation
    if (
      !width ||
      !height ||
      !backing ||
      !quantity ||
      !name ||
      !email ||
      !phone
    ) {
      return NextResponse.json(
        { message: "Please fill all required fields" },
        { status: 400 }
      );
    }

    if (files.length === 0) {
      return NextResponse.json(
        { message: "Please upload at least one design file" },
        { status: 400 }
      );
    }

    // Upload files to Cloudinary
    const uploadedFiles = [];

    for (const file of files) {
      if (file && file.size > 0) {
        const buffer = await file.arrayBuffer();
        const base64String = Buffer.from(buffer).toString("base64");
        const dataUri = `data:${file.type};base64,${base64String}`;

        const result = await cloudinary.uploader.upload(dataUri, {
          folder: "patch-orders",
          resource_type: "auto",
        });

        uploadedFiles.push(result.secure_url);
      }
    }

    const gettoken = request.cookies.get("AuthToken")?.value;

    const jwtdecode = jwt.verify(gettoken, "Abdullah");

    console.log(jwtdecode);

    // Save order to MongoDB
    const newOrder = new PatchOrder({
      user_id: jwtdecode._id,
      width,
      height,
      product,
      backing,
      quantity: parseInt(quantity),
      name,
      email,
      phone,
      instructions,
      source,
      budget,
      colors,
      urgency,
      files: uploadedFiles,
      status: "Pending",
    });

    await newOrder.save();

    return NextResponse.json({
      message: "Order submitted successfully",
      order: {
        id: newOrder._id,
        name: newOrder.name,
        email: newOrder.email,
        product: newOrder.product,
      },
    });
  } catch (error) {
    console.error("Order submission error:", error);
    return NextResponse.json(
      { message: "Error submitting order", error: error.message },
      { status: 500 }
    );
  }
}


export async function GET(request) {
  await Db_connection();

  try {
    // Token get
    const gettoken = request.cookies.get("AuthToken")?.value;

    if (!gettoken) {
      return NextResponse.json(
        { message: "No token found" },
        { status: 401 }
      );
    }

    // Token decode
    const jwtdecode = jwt.verify(gettoken, "Abdullah");

    // User ki orders fetch
    const orders = await PatchOrder.find({
      user_id: jwtdecode._id,
    }).sort({ createdAt: -1 });

    return NextResponse.json({ orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { message: "Error fetching orders" },
      { status: 500 }
    );
  }
}

