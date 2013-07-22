*---------------------------------*
*** K. Alleyne - kaldcraft.com ****
*---------------------------------*

- jsDecimal_toFixed.js -

Ever got to the issue where you are dealing with decimals and they add up to a strange, long decimal number?

Perhaps you want less decimals displayed. In the case of currency for example: $0.02. You don't want $0.00000999930003902.

Example: 
 var a = .2 + .1

 renders something like this: .000000@!@@#)000000000001!2!


The toFixed() method in Javasript returns the ouput as a string in fixed point notation which allows you to define how many decimals the number is rendered with through the argument.
For instance: toFixed(3) would render something like 0.030 from 0.029903030303003000200000200.



Test the code.

1. Create an HTML file with a DOM element #fixer and plug in the javascript to execute.
2. Create a button in the HTML file to call the function. default="roundD()"