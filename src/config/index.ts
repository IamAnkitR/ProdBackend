import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const PORT = process.env.PORT || 8080;
export const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/mydatabase";
