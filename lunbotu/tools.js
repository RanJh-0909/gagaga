
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
 