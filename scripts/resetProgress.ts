import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

(async () => {
  try {
    console.log("Resetting the db");

    await db.delete(schema.userProgress);

    console.log("Resetting finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to Reset the database");
  }
})();
