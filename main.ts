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
    if (pins.digitalReadPin(DigitalPin.P5) == 1 && pins.digitalReadPin(DigitalPin.P6) == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 1 && pins.digitalReadPin(DigitalPin.P6) == 0) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . # .
            . . # # .
            . . . # .
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P3, 1)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0 && pins.digitalReadPin(DigitalPin.P6) == 1) {
        basic.showLeds(`
            . # . . .
            . # # . .
            . # . # .
            . # # . .
            . # . . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P3, 0)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0 && pins.digitalReadPin(DigitalPin.P6) == 0) {
        basic.showLeds(`
            . # # # .
            # . . # #
            # . # . #
            # # . . #
            . # # # .
            `)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
        pins.digitalWritePin(DigitalPin.P3, 0)
    } else {
    	
    }
}
let control2 = 0
basic.forever(function () {
    if (input.runningTime() / 1000 >= 5) {
        runWithsensores()
    } else if (input.runningTime() / 1000 <= 4) {
        basic.showNumber(input.runningTime() / 1000)
    } else {
    	
    }
})
