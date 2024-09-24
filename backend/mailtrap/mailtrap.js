import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Ngesa",
};

//This has been removed since recepients will be different
// const recipients = [
//   {
//     email: "theengesa@gmail.com",
//   },
// ];
