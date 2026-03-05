/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Grace
 * Created on: Feb 2026
 * This program Will show a check mark.
*/

// Setup: Ensure LED is off at start
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

// Requirement: Button A powers ON the LED
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1) // Sets Pin 16 to 3.0V
})

// Requirement: Button B powers OFF the LED
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0) // Sets Pin 16 to 0.0V
})

