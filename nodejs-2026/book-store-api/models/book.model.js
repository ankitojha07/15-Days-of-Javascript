import { pgTable, uuid, varchar, text } from "drizzle-orm/pg-core";

import authorTable from "./author.model.js";

const booksTable = pgTable("books", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 100 }).notNull(),
  description: text(),
  authorId: uuid().references(() => authorTable.id),
});

export default booksTable;
export { booksTable };

// In-memory array for controller operations
export const Books = [];
