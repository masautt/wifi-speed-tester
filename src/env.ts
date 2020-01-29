import { resolve } from "path";
import { config } from "dotenv";
config({ path: resolve(__dirname, "../../.env") })


export const IFTTT_ACCESS_KEY = process.env.IFTTT_ACCESS_KEY;
export const FIREBASE_ENDPOINT = process.env.FIREBASE_ENDPOINT;