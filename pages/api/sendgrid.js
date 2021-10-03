import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log(req.body);
    // await sendgrid.send({
    //   to: "tytierney@yahoo.com", // Your email where you'll receive emails
    //   from: "ttierney32@gmail.com", // your website email address here
    //   subject: `${req.body.subject}`,
    //   html: `<div><p>You've got mail from ${req.body.email}.</p><p>Message: ${req.body.message}</p></div>`,
    // });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
