import { Router } from "express";
import transporter from "../config/mailer.js";
import validateForm from "../utils/validate.js";
import { formLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post('/', formLimiter, async (req, res) => {
  const error = validateForm(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  const { email, targetEmail, message } = req.body;

  if (!email || !targetEmail || !message) {
    return res.status(400).json({
      message: "Please provide email, targetEmail and message",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Landing Form" <${process.env.EMAIL_USER}>`,
      to: targetEmail,
      subject: "New Message from MERN Form",
      html: `
        <h3>New Message</h3>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>To:</strong> ${targetEmail}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Server error, try again later",
    });
  }
});

export default router;
