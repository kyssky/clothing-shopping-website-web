var select_orderId;
Date.prototype.Format = function (fmt) { //author: tony
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
};
function seletOrder(page){
    var url = "/api/admin-service/select_order?";
    var sku = document.getElementById("inv-s-sku").value;
    var orderId=document.getElementById("order-s-id").value;
    var userCode = document.getElementById("order-s-user").value;
    $.ajax({
        type: 'get',
        url: url + "page=" + page + "&order_id=" +orderId+"&userCode="+userCode,
        async: true,
        success: function (res) {
            var inn = '';
            var allpage = res.allpage;
            var page = res.page;
            document.getElementById("order-page").value = res.page;
            document.getElementById("order-allpage").innerHTML = res.allpage;
            var list = res.list;
            console.log(res);
            for (var a = 0; a < list.length; a++) {
                inn += '<div class="row">' +
                    '                            <div class="col-xs-2 ">' +
                    '                                ' +list[a].orderId+
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                ' +list[a].userCode+
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                ' +new Date(list[a].addTime).Format("yyyy-MM-dd hh:mm:ss.S")+
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                ' +list[a].allMoney+
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                ' +list[a].statusName+
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                <button v="'+list[a].orderId+'" class="btn btn-success btn-xs order-update" data-toggle="modal" data-target="#orderres">' +
                    '                                    修改' +
                    '                                </button>' +
                    '                            </div>' +
                    '                        </div>';
            }
            var ins = document.getElementById("order-index");
            ins.innerHTML = inn;
            var iii = document.getElementsByClassName("order-update");
            for (var a = 0; a < iii.length; a++) {
                iii[a].onclick = function (ev) {
                    select_orderId = ev.currentTarget.getAttribute("v");
                }
            }
        }
        ,
        error: function () {

        }
    })
}
function updateOrder(status){
    var url="/api/admin-service/change_order_status?"
    $.ajax({
        type: 'get',
        url: url + "orderId=" + select_orderId + "&status=" + status,
        async: true,
        success: function (res) {
            if (res>0){
                alert("修改成功");
                location.reload();
            }
        }
        ,
        error: function () {

        }
    })
}
seletOrder(1);

document.getElementById("order-select-u").onclick=function (ev) {
    seletOrder(1);
}

document.getElementById("o-s-tb").onclick=function (ev) {
    var c =document.getElementById("order-status");
    var ci = c.selectedIndex;
    var status=c.options[ci].getAttribute("v");
    updateOrder(status);
}