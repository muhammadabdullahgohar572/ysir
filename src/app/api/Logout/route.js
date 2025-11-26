import { Db_connection } from "@/app/libs/Db_connection";

import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    await Db_connection();

    const response = NextResponse.json({
      message: "Logout successFully",
    });
    response.cookies.delete("AuthToken");

    return response;
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      message: "Fail Get Items",
    });
  }
};
