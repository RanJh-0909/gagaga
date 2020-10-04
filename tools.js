// 定义一个函数，专门用来为指定元素绑定单击响应函数
// 参数： idStr 要绑定单机响应函数的对象的id属性值
// fun 事件的回调函数，当单机元素时 该函数将会被触发
// 函数作为对象也能作为参数
function myclick(idStr,fun){
    var btn = document.getElementById(idStr);
    btn.onclick = fun;
};



// 通过子节点自身删除自己
// 子节点.parentNode.removeChild(子节点);

// 使用innerHtml也可以完成DOM的增删改查各项操作
// 一般两种方法结合使用




// 定义一个函数，为指定元素绑定响应函数

// 参数：
// obj 要绑定事件的对象
// eventStr 事件的字符串(不要on)
// callback 回调函数


function bind(obj,eventStr,callback){

    if(obj.addEventLinstner){
        obj.addEventLinstner(eventStr,callback,false);
    }else{

        // 为了this不指向window，指向我们的dom对象不能直接用回调函数callback
        obj.attachEvent("on"+eventStr,function(){
            // 将callback换成匿名函数，再在匿名函数中调用回调函数
            callback.call(obj);
        });  
    }
};



    // 定义一个函数，用来获取指定元素的的当前样式
    // 参数：obj 要获取样式的元素
    //       name 要获取的样式名

    function getStyle(obj,name){

        if(window.getComputedStyle){
            return getComputedStyle(obj,null)[name];
        }else{
            return obj.cunrrentStyle[name];
        };

    };



    // 创建一个可以执行简单动画的函数
    // 参数：
    // obj：要执行动画的对象
    // attr：要执行动画的样式(不只是left)
    // target：执行动画的目标位置
    // speed：移动的速度
    // callback：回调函数 这个函数将会在动画执行完毕后执行(可以在一次动画执行完毕后接着执行下一个[套娃])


    function move(obj , attr , target , speed , callback){
        // 关闭上一个定时器
        clearInterval(obj.timer);
        // 获取对象目前的attr值
        var current = parseInt(getStyle(obj,attr));

        // 判断速度的正负值
        // 若target>oldValue为正值若target<oldValue为负值
        if(current > target){
            speed = -speed;
        };
        
        // 向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
        obj.timer = setInterval(function(){
            var oldValue = parseInt(getStyle(obj,attr));
            // 在旧值的基础上增加

            var newValue = oldValue + speed;

            // 向左移动（speed<0），需要判断newValue是否小于target
            // 向右移动（speed>0），需要判断newValue是否大于target
            if((speed<0 && newValue < target) || (speed>0 && newValue > target)){
                newValue = target;
            };
            // 将新值设置给对象
            obj.style[attr] = newValue+"px";

            // 当元素移动到target时，停止动画
            if(newValue == target){
                clearInterval(obj.timer);
                // 动画执行完毕 调用回调函数
                callback && callback();
                // 等价于if(callback){
                //     callback();
                    
                //     }
            };

        },30);


    };
 


// 定义一个函数 用来向一个元素中添加指定的class属性值
// 参数：
// obj 要添加的class属性的元素
// cn 要添加的class值
function addClass(obj , cn){
    if(!hasClass(obj ,cn)){
        obj.className += " "+cn
    };
};
// 判断一个元素中是否含有指定的class值
function hasClass(obj , cn){
    // 判断obj中有么有cn class
    // 创建一个正则表达式
    var reg = new RegExp("\\b'+cn'\\b");
    return reg.test(obj.className);



};
// 删除一个元素中的指定的class属性
function removeClass(obj , cn){
    var reg = new RegExp("\\b'+cn'\\b");
    obj.className = obj.className.replace(reg,"");
}
//  切换一个类
//  如果元素中有该类，则删除
//  如果元素中没有该类，则添加
function toggleClass(obj,cn){
    if(hasClass(obj , cn)){
        removeClass(obj,cn);
    }else{
        addClass(obj,cn);
    }

}






