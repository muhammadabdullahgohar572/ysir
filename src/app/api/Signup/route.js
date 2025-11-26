import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Db_connection } from "@/app/libs/Db_connection";
import User from "@/app/model/userModel";

export const POST = async (req, res) => {
  try {
    await Db_connection();

    const { username, email, phone, password } = await req.json();

    const extinguser = await User.findOne({ email });

    if (extinguser) {
      return NextResponse.json({
        message: "Email is Aleardy Exit please Login",
      });
    }

    const salt = await bcrypt.genSaltSync(10);
    const hashpassword = await bcrypt.hashSync(password, salt);

    const createdaccount = new User({
      username,
      email,
      phone,
      password: hashpassword,
    });

    const saveuser = await createdaccount.save();
    const jwtcode = jwt.sign(
      {
        _id: saveuser._id,
        username: saveuser.username,
        email: saveuser.email,
        phone: saveuser.phone,
        password: saveuser.password,
      },
      "Abdullah",
      {
        expiresIn: "1d",
      }
    );

    const response = NextResponse.json({
      user: jwtcode,
      message: "Account created successFully",
    });

    response.cookies.set("AuthToken", jwtcode);

    return response;
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: "Fail to created Account",
    });
  }
};
