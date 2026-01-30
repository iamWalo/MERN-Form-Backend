import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.RESEND_API_KEY?.trim();
if (!apiKey) {
  const present = Object.keys(process.env).filter((k) => k.includes("RESEND") || k.includes("RESEND_API"));
  console.error("RESEND_API_KEY is missing. Found env keys:", present);
  throw new Error("RESEND_API_KEY not set. Add it to your environment or .env file.");
}

const resend = new Resend(apiKey);

const sendMail = async ({ to, subject, html }) => {
  await resend.emails.send({
    from: "Landing <onboarding@resend.dev>",
    to,
    subject,
    html,
  });
};

export default sendMail;
