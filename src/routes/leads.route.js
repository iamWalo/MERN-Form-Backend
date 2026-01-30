import { Router } from "express";
import sendMail from "../config/mailer.js";
import validateForm from "../utils/validate.js";
// import { formLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post("/", async (req, res) => {
  const error = validateForm(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  const { email, message , targetEmail } = req.body;

  try {
    await sendMail({
      from: `"Landing Form" <${process.env.EMAIL_USER}>`,
      to: targetEmail,
      subject: "New Message from MERN Form",
      html: `
        <h3>New Message</h3>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


export default router;
