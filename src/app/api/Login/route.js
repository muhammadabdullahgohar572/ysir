import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Db_connection } from "@/app/libs/Db_connection";
import User from "@/app/model/userModel";
export const POST = async (req, res) => {
  try {
    await Db_connection();

    const { email, password } = await req.json();

    const findemail = await User.findOne({ email });

    if (!findemail) {
      return NextResponse.json({
        message: "Email not Exit please created Account then Login",
      });
    }

    const decode_password = await bcrypt.compare(password, findemail.password);

    if (!decode_password) {
      return NextResponse.json({
        message: "Password not match",
      });
    }

    const jwttoken = jwt.sign(
      {
        _id: findemail._id,
        username: findemail.username,
        email: findemail.email,
        phone: findemail.phone,
        password: findemail.password,
      },
      "Abdullah",
      {
        expiresIn: "1d",
      }
    );

    const response = NextResponse.json({
      user: jwttoken,
      message: "Login SuccessFully",
    });

    response.cookies.set("AuthToken", jwttoken);

    return response;
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: "Fail to Login server side issue",
    });
  }
};
