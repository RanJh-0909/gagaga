window.onload = function(){
    var checkedAllBox = document.getElementById("checkedAllBox");
    var checkedAllBtn = document.getElementById("checkedAllBtn");
    var items = document.getElementsByName("items");
    checkedAllBtn.onclick = function() {
        
        checkedAllBox.checked = true;
        // 必须要遍历items
        for(var i=0;i<items.length;i++){
            items[i].checked = true;
        }
    };
    var checkedNoBtn = document.getElementById("checkedNoBtn");
    checkedNoBtn.onclick = function() {
        

        // 必须要遍历items
        for(var i=0;i<items.length;i++){
            items[i].checked = false;
        }
        checkedAllBox.checked = false;
    };
    var checkedRevBtn = document.getElementById("checkedRevBtn");
    checkedRevBtn.onclick = function() {
        for(var i=0;i<items.length;i++){
            if(items[i].checked == true){
                items[i].checked = false;
            }else{
                items[i].checked = true;
            }
        }
        checkedAllBox.checked = true;
            for(var j=0; j<items.length;j++){
                if(items[j].checked==false){
                    checkedAllBox.checked = false;
                    break;
                }
            };
        
    };
    // 提交按钮 点击按钮以后 将所有的选中的多选框弹出
    // 在事件的响应函数中，响应函数是给谁绑定的this就是谁

    checkedAllBox.onclick = function() {
        for(var i=0;i<items.length;i++){
           items[i].checked = this.checked;           
        }
    };
    for(var i=0;i<items.length;i++){
        items[i].onclick = function(){
            // 默认值设为true
            checkedAllBox.checked = true;
            for(var j=0; j<items.length;j++){
                if(items[j].checked==false){
                    checkedAllBox.checked = false;
                    break;
                }
            };
        };          
     }
    


};