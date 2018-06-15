var loginregister = "api/user-service"

function login() {
    var username = document.getElementById("user-name").value;
    var userpassword = document.getElementById("user-password").value;
    $.ajax({
        type: "get",
        url: loginregister + "/user_login" + "?user_code=" + username + "&password=" + userpassword,
        async: false,
        success: function (result) {
            if (result) {
                alert("登入成功");
                window.href="index.html"
            } else {
                alert("帐号或者密码错误");
                window.href="index.html"
            }
            document.getElementById("login").style.display="none";
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("登入失败请重试");
            window.href="index.html"
        }
    });
}


function regise() {
    var rusername = document.getElementById("r-user-name").value;
    var ruserpassword = document.getElementById("r-user-password").value;
    var ruserpassword2 = document.getElementById("r-user-password-2").value;
    var remail = document.getElementById("r-email").value;
    console.log(ruserpassword2 + " " + ruserpassword)
    if (ruserpassword == ruserpassword2) {
        $.ajax({
            type: "get",
            url: loginregister + "/register" + "?user_code=" + rusername + "&password=" + ruserpassword + "&email=" + remail,
            async: false,
            success: function (result) {
                if (result) {
                    alert("注册成功");
                    window.href="index.html"
                } else {
                    alert("用户名称重复");
                    window.href="index.html"
                }
                document.getElementById("register").style.display="none";
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("注册失败请重试");
                window.href="index.html"
            }
        });
    } else {
        alert("两次密码不同");
    }
}
document.getElementById("start-login").onclick=login;
document.getElementById("to-regise").onclick=regise;