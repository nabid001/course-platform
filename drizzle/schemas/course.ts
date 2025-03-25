import { pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { CourseProductTable } from "./courseProduct";

export const CourseTable = pgTable("courses", {
  id: id,
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt,
  updatedAt,
});

export const CourseRelationsShips = relations(CourseTable, ({ many }) => ({
  courseProducts: many(CourseProductTable),
}));
