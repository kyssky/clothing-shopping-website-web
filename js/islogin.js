url = "api/user-service/is_login"

var uuuu=null;

function isLogin(){
    $.ajax({
        type: "get",
        url: url,
        async: true,
        success: function (result) {
            if (result) {
                console.log("用户登入成功")
                console.log(result);
                document.getElementById("user-iii").innerText=result.userCode;
                initGoodCart(result.userCode);
                uuuu=result;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("接口调用失败")
        }
    });
}
function initGoodCart(userCode){
    var getGWInfoUrl = 'api/goodscarts-service/get_all_user_goods?userCode='+userCode;
    $.ajax({
        type: "get",
        url: getGWInfoUrl,
        async: true,
        success: function (result) {
            document.getElementById("card-iii").innerText="购物车("+result.length+")";
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("接口调用失败")
        }
    });
}
isLogin();