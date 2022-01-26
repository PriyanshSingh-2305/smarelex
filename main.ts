function goForward () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function stop () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function goBackwards () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
