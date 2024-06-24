radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 12) {
    	
    } else if (receivedNumber == 8) {
    	
    } else if (receivedNumber == 0) {
    	
    }
})
function motion2 () {
	
}
function Ausgangsposition () {
    Position1 = 90
    Position2 = 90
    ServoSlow.setServoPosition(1, Position1)
    ServoSlow.setServoPosition(2, Position2)
}
function motion1 () {
    Position1 = ServoSlow.setServoAngle(1, 90, 10, 90, ServoSlow.ServoDirection.CW)
    Position2 = ServoSlow.setServoAngle(2, 90, 10, 90, ServoSlow.ServoDirection.CW)
}
let Position2 = 0
let Position1 = 0
radio.setGroup(1)
Ausgangsposition()
basic.forever(function () {
	
})
