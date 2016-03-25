var five = require("johnny-five");
var board = new five.Board();

function startMotor() {

  board.on("ready", function() {

    console.log('HEEERRRRREEEEEe');

    var motor = new five.Motor({
      pins: {
        pwm: 9,
        dir: 10
      }
    });

    motor.start(1);

    var led = new five.Led(2); 
    led.on();

    var led = new five.Led(3); 
    led.strobe();

  });
}

module.exports = {
  startMotor: startMotor
}