/**
 * Adelante
 */
/**
 * Izquierda
 */
/**
 * Derecha
 */
/**
 * Stop
 */
function runWithsensores () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 1)
        pins.digitalWritePin(DigitalPin.P10, 0)
        pins.digitalWritePin(DigitalPin.P11, 0)
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . # .
            . . # # .
            . . . # .
            `)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P10, 0)
        pins.digitalWritePin(DigitalPin.P11, 1)
    } else if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showLeds(`
            . # . . .
            . # # . .
            . # . # .
            . # # . .
            . # . . .
            `)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 1)
        pins.digitalWritePin(DigitalPin.P10, 1)
        pins.digitalWritePin(DigitalPin.P11, 0)
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showLeds(`
            . # # # .
            # . . # #
            # . # . #
            # # . . #
            . # # # .
            `)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P10, 0)
        pins.digitalWritePin(DigitalPin.P11, 0)
    } else {
    	
    }
}
function radioControl () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P10, 1)
        pins.digitalWritePin(DigitalPin.P11, 0)
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . # .
            . . # # .
            . . . # .
            `)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P10, 0)
        pins.digitalWritePin(DigitalPin.P11, 1)
    } else if (pins.digitalReadPin(DigitalPin.P0) == 0 && pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showLeds(`
            . # . . .
            . # # . .
            . # . # .
            . # # . .
            . # . . .
            `)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 1)
        pins.digitalWritePin(DigitalPin.P10, 1)
        pins.digitalWritePin(DigitalPin.P11, 0)
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1 && pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showLeds(`
            . # # # .
            # . . # #
            # . # . #
            # # . . #
            . # # # .
            `)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P10, 0)
        pins.digitalWritePin(DigitalPin.P11, 0)
    } else {
    	
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
basic.forever(function () {
    if (input.runningTime() / 1000 >= 5) {
        runWithsensores()
    } else if (input.runningTime() / 1000 <= 4) {
        basic.showNumber(input.runningTime() / 1000)
    } else {
    	
    }
})
