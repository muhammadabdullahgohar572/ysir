import { Db_connection } from "@/app/libs/Db_connection";
import ContactModel from "@/app/model/contact_us";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await Db_connection();

    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "Please fill all fields" },
        { status: 400 }
      );
    }

    const contact = new ContactModel({
      name,
      email,
      phone,
      message,
    });

    await contact.save();

    return NextResponse.json({
      message: "Contact form submitted successfully",
      data: contact,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
