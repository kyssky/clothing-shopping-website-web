var inv_update_item;

function selectAllInventy(page) {
    var url = "/api/admin-service/get_inventory?";
    var sku = document.getElementById("inv-s-sku").value;
    $.ajax({
        type: 'get',
        url: url + "page=" + page + "&sku=" + sku,
        async: true,
        success: function (res) {
            var inn = '';
            var allpage = res.allpage;
            var page = res.page;
            document.getElementById("inv-page").value = res.page;
            document.getElementById("inv-allpage").innerHTML = res.allpage;
            var list = res.list;
            console.log(res);
            for (var a = 0; a < list.length; a++) {
                inn += ' <div class="row">' +
                    '                            <div class="col-xs-2 ">' +
                    '                                ' + list[a].sku +
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                ' + list[a].goodsName +
                    '                            </div>' +
                    '                            <div class="col-xs-4">' +
                    '                                商品图片:' +
                    '                                <img src="../' + list[a].img + '" height="50px" style="margin-left: 100px"/>' +
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                ' + list[a].inventoryNumber +
                    '                            </div>' +
                    '                            <div class="col-xs-2">' +
                    '                                <button v="' + list[a].sku + '"  class="btn btn-success btn-xs inv-update" data-toggle="modal" data-target="#reviseUser">' +
                    '                                    修改' +
                    '                                </button>' +
                    '                            </div>' +
                    '                        </div>';
            }
            var ins = document.getElementById("inv-index");
            ins.innerHTML = inn;
            var iii = document.getElementsByClassName("inv-update");
            for (var a = 0; a < iii.length; a++) {
                iii[a].onclick = function (ev) {
                    inv_update_item = ev.currentTarget.getAttribute("v");
                }
            }
        }
        ,
        error: function () {

        }
    })
}

function updateInv(sku, number) {
    var user = "/api/admin-service/updateInventory?"
    $.ajax({
        type: 'get',
        url: user + "number=" + number + "&sku=" + sku,
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


selectAllInventy(1);
document.getElementById("inv-select").onclick = function (ev) {
    var page = document.getElementById("inv-page").value;
    selectAllInventy(page);
}
document.getElementById("inv-go").onclick = function (ev) {
    var page = document.getElementById("inv-page").value;
    selectAllInventy(page);
}

document.getElementById("inv-save").onclick = function (ev) {
    var number = document.getElementById("inv-update-number").value;
    if (number!=""){
        updateInv(inv_update_item,number);
    }
}
