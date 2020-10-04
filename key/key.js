window.onload = function(){
    var code = 0;
    var box1 = document.getElementById("box1");
    // 定时器控制速度
    setInterval(function(){
        switch(code){
            case 37:
                box1.style.left = box1.offsetLeft - 10 +"px";
                break;
            case 38:
                box1.style.top = box1.offsetTop - 10 +"px";
                break;
            case 39:
                box1.style.left = box1.offsetLeft + 10 +"px";
                break;
            case 40:
                box1.style.top = box1.offsetTop + 10 +"px";
                break;
        }
    },30);
// 键盘控制方向
    document.onkeydown = function(event){
        event = event || window.event;
        code = event.keyCode;

    
    };
    document.onkeyup = function(event){
        event = event || window.event;
        code = null;
        
    
    };







};