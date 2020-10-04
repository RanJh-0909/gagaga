window.onload = function(){

    var img1 = document.getElementById("img1");
    var imgarr = ["img1.jpg","img2.jpg","img3.jpg",];
    var index = 0;
    var btn01 = document.getElementById("btn01");
    var btn02 = document.getElementById("btn02");
    var timer;
    btn01.onclick = function(){

        // 在开启定时器之前关闭当前元素上的其他定时器 避免出现多点导致速度过快的情况
        clearInterval(timer);

        timer = setInterval(function(){
            index++;
            if(index >= imgarr.length){
                index = 0;
            };
            img1.src = imgarr[index];    
        },1000);

    };
    btn02.onclick = function(){
        clearInterval(timer);
    };


    



};
