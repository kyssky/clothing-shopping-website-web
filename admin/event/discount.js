var dis_sku;
function selectDiscount(page){
    console.log("start");
    var url444 = "/api/admin-service/get_discount?";
    var sku = document.getElementById("dis-s-sku").value;
    $.ajax({
        type: 'get',
        url: url444 + "page=" + page + "&sku=" + sku,
        async: true,
        success: function (res) {
            var inn = '';
            var allpage = res.allpage;
            var page = res.page;
            document.getElementById("dis-page").value = res.page;
            document.getElementById("dis-allpage").innerHTML = res.allpage;
            var list = res.list;
            console.log(res);
            for (var a = 0; a < list.length; a++) {
                inn += '<div class="row">' +
                    '                            <div class="col-xs-2 ">' +
                    '                                ' +list[a].sku+
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                ' +list[a].goodsName+
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                <img src="../'+list[a].img+'" height="50px"/>' +
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                ' +list[a].discountsMoney+
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                ' +list[a].style+
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                <button v="'+list[a].sku+'" class="btn btn-success btn-xs dis-update" data-toggle="modal" data-target="#revisediscount">' +
                    '                                    修改' +
                    '                                </button>' +
                    '                            </div>' +
                    '                        </div>';
            }
            var ins = document.getElementById("dis-row");
            ins.innerHTML=inn;
            var iii = document.getElementsByClassName("dis-update");
            for (var a = 0; a < iii.length; a++) {
                iii[a].onclick = function (ev) {
                    dis_sku = ev.currentTarget.getAttribute("v");
                }
            }
        }
        ,
        error: function () {

        }
    })
}
function updateDis(name,money){
    var url = "/api/admin-service/update_discount?"
    $.ajax({
        type: 'get',
        url: url + "sku=" + dis_sku + "&info=" +name+"&money="+money,
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
selectDiscount(1);

document.getElementById("dis-s-btn-p").onclick=function (ev) {
    selectDiscount(1);
}

document.getElementById("dis-go").onclick=function (ev) {
    var page=  document.getElementById("dis-page").value;
    selectDiscount(page);
}

document.getElementById("up-dis-btn").onclick=function (ev) {
    var name = document.getElementById("up-dis-name").value;
    var money = document.getElementById("up-dis-money").value;
    if (name==""||money==""){
        alert("请输入正确的信息")
    }else{
        updateDis(name,money);
    }
}