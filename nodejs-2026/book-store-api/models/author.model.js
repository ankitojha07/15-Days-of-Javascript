import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

const authorTable = pgTable("author", {
  id: uuid().primaryKey().defaultRandom(),
  firstName: varchar({ length: 100 }).notNull(),
  lastName: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export default authorTable;
