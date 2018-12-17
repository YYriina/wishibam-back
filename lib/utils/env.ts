import * as dotenv from "dotenv";

//config dotenv
dotenv.config();
let path;
//default path .env
switch (process.env.NODE_ENV) {
  case "test":
    path = `${__dirname}/../../.env.test`;
    break;
  case "production":
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env`;
}
//use path
dotenv.config({ path: path });


//export all env variable
export const DB_URL = process.env.DB_URL;
export const APP_PORT = process.env.APP_PORT;
export const MAIL_USER = process.env.MAIL_USER
export const MAIL_PASS = process.env.MAIL_PASS
export const MAIL_PORT = process.env.MAIL_PORT
export const MAIL_SMTP = process.env.MAIL_SMTP