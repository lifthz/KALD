*---------------------------------*
*** K. Alleyne - kaldcraft.com ****
*---------------------------------*

- screen_size.js -


NOTE: Anything within *s like... *text* --> means you can replace everything within (including the *s) with whatever YOU DECIDE TO NAME IT.


A simple js function snippet that displays the current browser page dimensions (width and height). Good for responsive testing.

You can plug this js into your site, create an element with the ID "*IDName*" (the default is sw) for the js function to write to. Then you can call the script with an input(<input>) or better yet a button (<button>) with an onclick attribute. (the default name is screenS).

^ ---> Example: <button onclick="*nameOfYourFunction()*"


- For a real-time effect without having to call the script constantly with the button, and, as the window is resized; add the function to an onresize attribute on the<body> tag of your page.

^ ---> Example: <body onresize="functionName()">

- Display changes to red once browser width is or greater than 1024px wide, otherwise, it will be blue if less than 1024px wide.