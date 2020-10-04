window.onload = function(){
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var img = document.getElementsByTagName("img")[0];
    var imgArr=["img1.jpg","img2.jpg","img3.jpg"];
    var p = document.getElementsByTagName("p")[0];
    var index = 0;
    p.innerHTML = "一共有"+imgArr.length+"张图片，现在是第"+(index+1)+"张";
    prev.onclick = function(){
        index--;
        if(index < 0){
            index = imgArr.length-1;
        }
        img.src = imgArr[index];
        p.innerHTML = "一共有"+imgArr.length+"张图片，现在是第"+(index+1)+"张";
    };
    next.onclick = function(){
        index++;
        if(index>imgArr.length-1){
            index = 0;
        }
        img.src = imgArr[index];
        p.innerHTML = "一共有"+imgArr.length+"张图片，现在是第"+(index+1)+"张";
    };






};
