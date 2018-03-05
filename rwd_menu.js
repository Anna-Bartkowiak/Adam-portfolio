function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className = "responsive";
    } else {
        x.className = "topnav";
    }
}

function myFunction1() {
    var x = document.getElementById("myTopnav");
    if (x.className === "responsive") {
        x.className = "topnav";
    } else {
        x.className = "topnav";
    }
}