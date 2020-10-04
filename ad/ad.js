function delA(){
        var tr = this.parentNode.parentNode;
        var name = tr.firstElementChild.innerHTML;
        var flag = confirm("真的要删除"+name+"吗？");
        // confirm用于弹出一个带有确认和取消按钮的提示框，需要一个字符串作为参数
        // 如果点击确认返回ture 反之返回false
        if(flag){
            tr.parentNode.removeChild(tr);
        };



        return false;
        // 不希望出现默认行为，可以通过在响应函数的最后return false来取消默认行为       
};








window.onload = function(){

    var allA = document.getElementsByTagName("a");
    for(var i=0; i<allA.length;i++){
        allA[i].onclick = delA;
    };

    var addEmpButton = document.getElementById("addEmpButton");
    addEmpButton.onclick = function(){
        // 获取员工的各项属性
        var name = document.getElementById("empName").value;
        var email = document.getElementById("email").value;
        var salary = document.getElementById("salary").value;
        // 创建一个tr
        var tr = document.createElement("tr");
        // 创建四个td
        var nameTd = document.createElement("td");
        var emailTd = document.createElement("td");
        var salaryTd = document.createElement("td");
        var aTd = document.createElement("td");
        // 创建a标签
        var a = document.createElement("a");
        // 创建文本节点
        var nameText = document.createTextNode(name);
        var emailText = document.createTextNode(email);
        var salaryText = document.createTextNode(salary);
        var delText = document.createTextNode("Delete");
        // 将文本添加到td
        nameTd.appendChild(nameText);
        emailTd.appendChild(emailText);
        salaryTd.appendChild(salaryText);
        // 在a标签中添加文本
        a.appendChild(delText);
        // 将a添加到td中
        aTd.appendChild(a);
        // 将td添加到tr中
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(salaryTd);
        tr.appendChild(aTd);
        // 给a添加href属性
        a.href = "";
        a.onclick = delA;
        // 获取table将tr引入table
        var employeeTable = document.getElementById("employeeTable");
        // 获取tbody
        var tbody = document.getElementsByTagName("tbody")[0];
        tbody.appendChild(tr);





    }; 




















};