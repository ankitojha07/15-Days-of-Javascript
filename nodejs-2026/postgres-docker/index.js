// Use CommonJS requires so this runs under default Node (no "type": "module")
const { db } = require("./db");
const { userTable } = require("./drizzle/schema");

// require("dotenv/config");

// dotenv.config();

async function getAllUsers() {
  // make sure db and userTable are defined
  if (!db) {
    console.error("db is not initialized");
    return;
  }
  if (!userTable) {
    console.error("userTable is not defined");
    return;
  }

  try {
    const users = await db.select().from(userTable);
    console.log(users);
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

async function createUser(id, name, email) {
  await db.insert(userTable).values({
    id,
    name,
    email,
  });
}

// createUser(1, "Ankit Ojha", "ankit@example.com");
getAllUsers();
