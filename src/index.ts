import speedTest from "speedtest-net";

import { IFTTTConnector } from 'ifttt-webhooks-connector';
import { IFTTT_ACCESS_KEY, FIREBASE_ENDPOINT } from "./env";

const conn = new IFTTTConnector(`${FIREBASE_ENDPOINT}`, `${IFTTT_ACCESS_KEY}`)
const payload = conn.generatePayload({ "hi" : "world" })
conn.send(payload)