import mongoose from "mongoose";

export const Db_connection = async () => {
  try {
    const Mongodb_Url = process.env.DB_URL;

    const connection = await mongoose.connect(Mongodb_Url, {
      dbName: "Yasir",
    });
  } catch (error) {
    console.log(error);
  }
};
