"use server";

import { db } from "@/drizzle/db";
import { UserTable } from "../schema";
import { eq } from "drizzle-orm";

export const createUser = async (data: typeof UserTable.$inferInsert) => {
  try {
    const [user] = await db
      .insert(UserTable)
      .values(data)
      .returning()
      .onConflictDoUpdate({
        target: [UserTable.clerkUserId],
        set: data,
      });

    if (!user) throw new Error("Failed to create user");

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (
  { clerkUserId }: { clerkUserId: string },
  data: Partial<typeof UserTable.$inferInsert>
) => {
  try {
    const [updatedUser] = await db
      .update(UserTable)
      .set(data)
      .where(eq(UserTable, clerkUserId))
      .returning();

    if (!updatedUser) throw new Error("Failed to update user");

    return updatedUser;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async ({ clerkUserId }: { clerkUserId: string }) => {
  try {
    const [deletedUser] = await db
      .update(UserTable)
      .set({
        deletedAt: new Date(),
        email: "redacted@gmail.com",
        name: "Deleted User",
        clerkUserId: "deleted",
        imageUrl: null,
      })
      .where(eq(UserTable, clerkUserId))
      .returning();

    if (!deletedUser) throw new Error("Failed to update user");

    return deletedUser;
  } catch (error) {
    console.log(error);
  }
};
