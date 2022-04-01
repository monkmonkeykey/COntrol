input.onButtonPressed(Button.A, function () {
    radio.sendValue("motores", 1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("motores", 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("motores", 2)
})
radio.onReceivedValue(function (name, value) {
    if (name == "motores" && value == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
    } else if (name == "motores" && value == 2) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 1)
    } else if (name == "motores" && value == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
    } else {
    	
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
