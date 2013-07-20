    function screenS() {
        var y = document.getElementById("sw");
        y.innerHTML = "Current width of browser window = " + window.innerWidth + "px" + " & the current height = " + window.innerHeight + "px";
        if (window.innerWidth >= 1024) { y.style.color = "red"; y.style.zoom = "2"; }
        else { y.style.color = "blue"; y.style.zoom = "1"; }
    };