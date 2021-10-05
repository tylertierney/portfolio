import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log(req.body);
    await sendgrid.send({
      to: "tytierney@yahoo.com",
      from: "ttierney32@gmail.com",
      subject: `${req.body.subject}`,
      html: `
      <div>
      <h2>Someone filled out the contact form on tylertierney.com</h2>
      <p>Sender: ${req.body.email}.</p>
      <p>Subject: ${req.body.subject}</p>
      <p>Message: ${req.body.message}</p>
      </div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
