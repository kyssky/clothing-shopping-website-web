url = "/api/user-service/admin_is_login"
var uuuu;

function isLogin(){
    $.ajax({
        type: "get",
        url: url,
        async: true,
        success: function (result) {
            if (result) {
                console.log("用户登入成功")
                console.log(result);
                uuuu=result;
            }else{
                console.log("用户尚未登入")
                window.location.href="/admin/login.html";
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("接口调用失败")
        }
    });
}
isLogin();