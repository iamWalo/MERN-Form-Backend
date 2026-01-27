import { Router } from "express";

const router = Router();

router.post('/',(req, res) => {
    const { receiverEmail } = req.body;

    if(!receiverEmail){
        return res
        .status(400)
        .json({ message: "Receiver email is required" });
    }
    
  // save in session (demo)
  req.session.receiverEmail = receiverEmail;

  res.json({
    message: 'Receiver email saved successfully',
    receiverEmail,})
});

export default router;