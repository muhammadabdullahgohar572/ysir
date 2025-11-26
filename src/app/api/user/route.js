

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

import User from "@/app/model/userModel";
import { Db_connection } from "@/app/libs/Db_connection";
export const GET = async (req, res) => {
  try {
    await Db_connection()
    const gettoken = req.cookies.get("AuthToken")?.value;

    const jwtdecode = jwt.verify(gettoken, "Abdullah");

    console.log(jwtdecode)
    const finddata = await User.findOne({ _id: jwtdecode._id });

    if (!finddata) {
      return NextResponse.json({
        message: "Email not Exit please created Account then Login",
      });
    }

    return NextResponse.json({
      user: finddata,
      message: "SuccessFully get user",
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: "Fail to get user",
    });
  }
};
