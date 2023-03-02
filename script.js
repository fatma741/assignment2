var div = document.getElementById("player");
var body = document.body;
var countleft = 0;
var countup = 0;
document.addEventListener('keydown', function (e) {
    if (e.code == "ArrowRight") {
        countleft += 100;
        div.style.left = countleft + 'px';

    }
    else if (e.code == "ArrowLeft") {
        countleft -= 100;
        div.style.left = countleft + 'px';

    }
    else if (e.code == 'ArrowDown') {
        countup += 50;
        div.style.top = countup + 'px';

    }
    else if (e.code == 'ArrowUp' || e.code == 'Space') {
        countup -= 50;
        div.style.top = countup + 'px';

    }

})


