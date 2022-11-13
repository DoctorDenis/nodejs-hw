const { BASE_URL } = process.env;

function generateEmailBody(user) {
  const html = `<h2>Hello dear ${user.name}</h2>
  <h4>Congratulations!</h4>
  <p>You registered successfuly!</p>
  <p>To complete your registration process, you have to finish one more step.</p>
  
  <p style="color: green">Please 
      <a
      href="${BASE_URL}/users/verify/${user.verificationToken}" 
      target="_blank"
      rel="noopener noreferrer"
      >click here</a
    >
    to verify you email.</p>`;

  return {
    to: user.email,
    subject: "Email verification",
    html: html,
  };
}

module.exports = generateEmailBody;
