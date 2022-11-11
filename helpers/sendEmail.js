const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

async function sendEmail({ to, subject, html }) {
  if (!to || !subject || !html) {
    console.error("Incomplete email body");
    throw new Error("Incomplete email body");
  }
  const msg = {
    to,
    subject,
    html,
    from: "doctordenozavr@gmail.com",
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = sendEmail;
