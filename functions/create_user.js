const admon = require('firebase-admin');

module.exports = function(req, res) {
  // Verify the user provided a phone
  if(!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' })
  }

  // Format the phone number to remove dashes and PaymentResponse
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  // Create a new user account using that phone number

  // Respond to the user request, saying the account was made
}