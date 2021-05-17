OLED.init(128, 64)

def on_forever():
    if smarthome.PIR(DigitalPin.P2):
        basic.show_number(1)
        OLED.write_string_new_line("Running")
        pins.digital_write_pin(DigitalPin.P1, 1)
    else:
        OLED.clear()
        basic.show_number(0)
        pins.digital_write_pin(DigitalPin.P1, 0)
basic.forever(on_forever)
