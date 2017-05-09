/*
  LiquidCrystal Library - Hello World

  Demonstrates the use a 16x2 LCD display.  The LiquidCrystal
  library works with all LCD displays that are compatible with the
  Hitachi HD44780 driver. There are many of them out there, and you
  can usually tell them by the 16-pin interface.

  This sketch prints "Hello World!" to the LCD
  and shows the time.

  The circuit:
   LCD RS pin to digital pin 12
   LCD Enable pin to digital pin 11
   LCD D4 pin to digital pin 5
   LCD D5 pin to digital pin 4
   LCD D6 pin to digital pin 3
   LCD D7 pin to digital pin 2
   LCD R/W pin to ground
   LCD VSS pin to ground
   LCD VCC pin to 5V
   10K resistor:
   ends to +5V and ground
   wiper to LCD VO pin (pin 3)

  Library originally added 18 Apr 2008
  by David A. Mellis
  library modified 5 Jul 2009
  by Limor Fried (http://www.ladyada.net)
  example added 9 Jul 2009
  by Tom Igoe
  modified 22 Nov 2010
  by Tom Igoe

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/LiquidCrystal
*/

// include the library code:
#include <LiquidCrystal.h>

// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(7, 8, 9, 10, 11, 12);

String inputString = "";         // a string to hold incoming data
boolean stringComplete = false;  // whether the string is complete

String response[3];
int responseSize = 3;
int commaPos = 0;
String top = "";
String bottom = "";


void setup() {
  // set up the LCD's number of columns and rows:

  // initialize serial:
  Serial.begin(9600);
  // reserve 200 bytes for the inputString:
  inputString.reserve(200);

  lcd.begin(16, 2);
  // Print a message to the LCD.



}

void loop() {

  if (stringComplete) {
    Serial.println(inputString);
    lcd.clear();
    // String testMessage = "Miami,Overcast,35,";

    for (int i = 0; i < inputString.length(); i++) {
      char cur = inputString[i];
      if (cur != ',') {
        response[commaPos] += cur;
      }
      if (cur == ',') {
        commaPos++;
      }
    }

    top = response[0] + " & " +  response[2] + "C";
    bottom =  response[1];
    lcd.setCursor(0, 0);
    lcd.print(top);
    lcd.setCursor(0, 1);
    lcd.print(bottom);
    // clear the string:
    inputString = "";
    stringComplete = false;
  }


}

void serialEvent() {
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read();
    // add it to the inputString:

    // if the incoming character is a newline, set a flag
    // so the main loop can do something about it:
    if (inChar == '\n') {
      stringComplete = true;
    } else {
      inputString += inChar;
    }
  }
}

