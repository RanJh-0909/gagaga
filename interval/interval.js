window.onload = function(){


    var box1 = document.getElementById("box1");
    var btn01 = document.getElementById("btn01");
    var timer;
    btn01.onclick = function(){
        clearInterval(timer);
        timer = setInterval(function(){
            var oldValue = box1.offsetLeft;
            var newValue = oldValue + 10;
            box1.style.left = newValue+"px";


        },30)

    };
    btn02.onclick = function(){
        clearInterval(timer);
    };







};