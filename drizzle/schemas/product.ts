import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { CourseProductTable } from "./courseProduct";

export const productStatuses = ["public", "private"] as const;
export type ProductStatus = (typeof productStatuses)[number];
export const productsEnum = pgEnum("product_status", productStatuses);

export const ProductTable = pgTable("products", {
  id: id,
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("imageUrl").notNull(),
  priceInDollars: integer("priceInDollars").notNull(),
  status: productsEnum().default("private"),
  createdAt,
  updatedAt,
});

export const ProductRelationsShips = relations(ProductTable, ({ many }) => ({
  courseProducts: many(CourseProductTable),
}));
