import { timestamp, uuid } from "drizzle-orm/pg-core";

export const id = uuid("id").primaryKey().defaultRandom();
export const createdAt = timestamp("createdAt").defaultNow();
export const updatedAt = timestamp("updatedAt")
  .defaultNow()
  .$onUpdate(() => new Date());
