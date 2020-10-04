window.onload = function(){
    var box1 = document.getElementById("box1");
    box1.onmousedown = function(event){
        event = event || window.event;
        var ol = event.clientX-box1.offsetLeft;
        var ot = event.clientY-box1.offsetTop;
        // 求鼠标点击时距离左边与右边的长度

        document.onmousemove = function(event){
            event = event || window.event;
            var left = event.clientX;
            var top = event.clientY;
            box1.style.left = left-ol+"px";
            box1.style.top = top-ot+"px";
        };
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
        };

        // // 当我们拖拽一个网页中的内容(使用了全选)时，浏览器会默认去搜索引擎中搜索内容，
        // 此时会导致拖拽功能的异常(有重影)，这个是浏览器提供的默认行为，
        // 如果不希望发生这个行为，则可以通过return false来取消默认行为,ie8以上
        
        return false;

    };






};