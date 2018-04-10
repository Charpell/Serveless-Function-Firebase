const twilio = require('twilio');

const accountSid = 'AC9411811586da8631703b59547183707a';
const authToken = 'eccf2150126ddb25d3cc5ff58d783341';

module.exports = new twilio.Twilio(accountSid, authToken)