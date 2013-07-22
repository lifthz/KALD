function roundD() {
        var x = 0.1 + 0.2;
        var x = x.toFixed(2); // This .toFixed(#) narrows the result down to a hundreths placed decimal. Naturally if you cahnge it to 3 it would be thousanths, 1 is tenths etc.
        var to = document.getElementById("fixer");
        var z = to.innerHTML = x;
//      var z = to.innerHTML = "$" + x;  // Replace the line above with this one for a $ in front. :)
    };

// * Don't get why you need this? Comment out the second x variable to see how it rendered without the toFixed() method.