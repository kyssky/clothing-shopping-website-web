var changeUrl = "api/order-service/change_order_status";
var createUrl = "api/order-service/create_order?userCode=";
var showorder = "api/order-service/show_order?userCode=";
var deleteOrder = "api/order-service/delete_order?orderId=";
url = "api/user-service/is_login";
var uuuu;


Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
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
            }else{
                alert("请先登入")
                window.location="index.html";
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("请先登入")
            indow.location="index.html";
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


function createOrder() {
    var userInfo;
    $.ajax({
        type: "get",
        url: createUrl + userInfo.userCode,
        async: true,
        success: function (result) {
            if (result) {
                alert(订单创建成功)
            } else {
                alert("订单创建失败请重试")
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("订单创建失败请重试")
        }
    });
}

function showOrder() {
    $.ajax({
        type: "get",
        url: showorder + uuuu.userCode,
        async: true,
        success: function (result) {
            console.log(result);
            var string = "";
            for (var a = 0; a < result.length; a++) {
                var allMoney=result[a].allMoney;
                var sss=result[a].statusName;
                var p=result[a].status==0?'style="visibility: hidden"':'';
                var ss = '<div class="row col-xs-12  c-item" >' +
                    '        <div class="d-id col-xs-3">订单编号：' + result[a].orderId + '</div>' +
                    '        <div class="d-number col-xs-2">商品数量:' + result[a].goodsCardsBeans.length + '</div>' +
                    '        <div class="d-time col-xs-2">' +new Date(result[a].addTime).Format("yyyy-MM-dd hh:mm:ss")  + '</div>' +
                    '        <div class="d-money col-xs-2">总金额：￥' +allMoney + '</div>' +
                    '        <div class="d-money col-xs-2">订单状态：' +result[a].statusName + '</div>' +
                    '        <button '+p+'  class="col-xs-1 deleteOrder" info="'+result[a].orderId+'">删除</button>' ;
                for (var b = 0; b < result[a].goodsCardsBeans.length; b++) {
                    var beans=result[a].goodsCardsBeans[b];
                    ss += '<div class="d-goods col-xs-12" style="margin: 2rem;border: 3px solid whitesmoke">' +
                        '            <div class="g-id col-xs-3">' +
                        '                商品id：'+beans.sku+'' +'<br/>size:'+beans.size+'<br/>color:'+beans.color+
                        '            </div>' +
                        '            <div class="g-img col-xs-3">' +
                        '                <img src="'+beans.img+'" class="col-xs-12" style="height: 100px;"/>' +
                        '            </div>' +
                        '            <div class="g-name col-xs-3">' +
                        '                <div class="g-info">'+beans.goodsName+'</div>' +
                        '                <div class="g-money">单价:'+beans.money+'</div>' +
                        '                <div class="g-discount">优惠:'+beans.discount+'</div>' +
                        '                <div class="g-allmoney">总价格:'+(beans.money-beans.discount)*beans.skuNumber+'</div>' +
                        '            </div>' +
                        '            <div class="g-number col-xs-3">' +
                        '                '+beans.skuNumber+'' +
                        '            </div>' +
                        '        </div>'
                }
                ss += '    </div>'
                string+=ss;
            }
            if(string!="")
            document.getElementById("orddd").innerHTML=string;


            var deleteitem = document.getElementsByClassName("deleteOrder");
            for (var a=0;a<deleteitem.length;a++){
                console.log(deleteitem);
                deleteitem[a].onclick=changorder;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("请先登入");
            window.location = "index.html";
        }
    });

    function getAllMoney(bbb) {
        console.log(bbb);
        var a=0;
        for(var b=0;b<bbb.length;bbb++){
            console.log(bbb[b].money+" "+bbb[b].skuNumber)
            a+=bbb[b].money*bbb[b].skuNumber;
        }
        return a;
    }
}
setTimeout(function(){
    if(uuuu){
        showOrder();
    }
},300);

function changorder(event) {
    var orderid = event.currentTarget.attributes['info'].value;
    console.log(orderid);
    var userInfo;
    $.ajax({
        type: "get",
        url: changeUrl+"?"+'orderId='+orderid+'&status=0',
        async: true,
        success: function (result) {
            if (result) {
                console.log(result);
                alert('取消订单成功')
                location.reload();
            } else {
                alert("取消订单失败")
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("取消订单失败")
        }
    });
}

function deleteOrder() {

}




