"use server";

import { db } from "@/drizzle/db";

export const getPost = async () => {
  try {
    const user = await db.query.UserTable.findMany();

    return user;
  } catch (error) {
    console.log(error);
  }
};
