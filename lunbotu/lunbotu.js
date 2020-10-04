window.onload = function(){
    // 设置imglist宽度 
    var imgList = document.getElementById("imgList");
    var imgArr = document.getElementsByTagName("li");
    imgList.style.width = 540*imgArr.length+"px";
    // 设置nav的位置
    var nav = document.getElementById("nav");
    var outer = document.getElementById("outer");
    nav.style.left = (outer.offsetWidth-nav.offsetWidth)*0.5+"px";
    var index = 0;
    var allA = document.getElementsByTagName("a");
    allA[index].style.backgroundColor = "black";
    for(var i=0;i<allA.length;i++){
        // 为每一个超链接添加一个num属性
        allA[i].num = i;
        allA[i].onclick = function(){

            // 关闭自动切换定时器
            clearInterval(timer);
            index = this.num;
            // imgList.style.left = -540*index+"px";

            setA();
            move(imgList,"left",-540*index,20,function(){
                // 动画执行完毕 开启自动切换
                autoChange();
            })
        };
    };
    // 开启自动切换
    autoChange();



    
    function setA(){
        
        // 判断当前索引是否为最后一张图片
        if(index >= imgArr.length - 1){
            index = 0;
            imgList.style.left = 0;
        
        };


        for(var i=0; i <allA.length;i++){
            allA[i].style.backgroundColor = "";
           

        };
        allA[index].style.backgroundColor = "black";
    };
    
    // 自动切换图片
    var timer;
    function autoChange(){

        timer=setInterval(function(){
            // 使索引自增
            index++;
            // if(index==3){
            //     index=0;
            // };
            // 执行动画切换图片
            move(imgList,"left",-540*index,20,function(){
                setA();
            });


        },3000);



    };

};
