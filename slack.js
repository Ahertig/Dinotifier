var RtmClient = require('slack-client').RtmClient;
var motor = require('./motor-testing');

var token = 'xoxp-26449759696-26449759744-26449961456-810da74955';
// var token = process.env.SLACK_API_TOKEN || '';

var rtm = new RtmClient(token, {logLevel: 'debug'});
rtm.start();

var CLIENT_EVENTS = require('slack-client').CLIENT_EVENTS;

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
});

var RTM_CLIENT_EVENTS = require('slack-client').CLIENT_EVENTS.RTM;

// you need to wait for the client to fully connect before you can send messages
function sendToSlack(url) {

  // rtm.on(RTM_CLIENT_EVENTS.RTM_CONNECTION_OPENED, function () {
    // This will send the message 'this is a test message' to the channel identified by id 'C0SEXJL95'
  rtm.sendMessage('Logged graph to blockchain: ' + url, 'C0SEXJL95', function messageSent() {
    console.log('SENT THE MESSAGE!')
    // optionally, you can supply a callback to execute once the message has been sent
  });
//   });
}

var RTM_EVENTS = require('slack-client').RTM_EVENTS;

rtm.on(RTM_EVENTS.MESSAGE, function (message) {
  console.log('YOU RECEIVED A NEW MESSAGE: ', message.text)
  motor.startMotor()
});

module.exports = {sendToSlack: sendToSlack};
