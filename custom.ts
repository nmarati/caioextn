
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Kodely Blocks
**/
//% weight=100 color=#f4a261 icon="\uf2de"
namespace kodely {
    /**
     * Returns light level from light sensor 
     * @param Pin number to which light sensor is connected to
    **/
    //% help=Returns current light level
    //% blockId="LightLevel" block="light level | %Pin"
    export function lightlevel(Pin: AnalogPin): number {
        let lightLevel = 0;
        lightLevel = pins.map(
            pins.analogReadPin(Pin),
            0,
            1023,
            0,
            100
        );
        return Math.round(lightLevel);
    }

    /**
     * Turn LED on/off connected to pin
     * @param Pin number to which LED is connected to
     * @param ledonoff On or Off
    **/
    //% blockId=turn_LED block="Turn LED %ledonff at %pin"
    //% ledonff.shadow="toggleOnOff"
    export function turnLED( ledonoff: boolean,pin: AnalogPin): void {
        if (ledonoff) {
            pins.analogSetPeriod(pin, 100)
            pins.analogWritePin(pin, 100) // brightness
        }
        else {
            pins.analogWritePin(pin, 0)
        }
    }


    /**
    * Detect Motion
    * @param Pin number to which motion sensor is connected to
    **/
    //% blockId="PIRSensor" block="Motion detected on %pin"
    export function PIR(pin: DigitalPin): boolean {
        return (pins.digitalReadPin(pin) == 1) 
    }

}
