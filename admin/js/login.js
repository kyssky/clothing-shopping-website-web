var url = "/api/user-service";
function login() {
    var username = document.getElementById("username").value;
    var userpassword = document.getElementById("password").value;
    $.ajax({
        type: "get",
        url: url + "/admin_login" + "?userCode=" + username + "&password=" + userpassword,
        async: false,
        success: function (result) {
            if (result) {
                alert("登入成功");
                window.location.href="index.html"
            } else {
                alert("登入失败请重试");
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("登入失败请重试！")
        }
    });
}


document.getElementById("login").onclick=function(){
    login();
}