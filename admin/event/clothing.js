function insertClothin(){
    var ciname = document.getElementById("c-i-name").value;
    var cc = document.getElementById("c-i-select");
    var ccindev= cc.selectedIndex;
    var ccop= cc.options[ccindev].getAttribute("v");

    var fcc = document.getElementById("c-i-f-select");
    var fccindev= fcc.selectedIndex;
    var fccop= fcc.options[fccindev].getAttribute("v");

    var img = document.getElementById("c-i-img").value;
    var money = document.getElementById("c-i-money").value;
    var info = document.getElementById("c-i-info").value;

    if(ciname==""||ccop==""||fccop==""||img==""||money==""||info==""){
        alert("请输入正确的数据")
    }else{
        console.log(ciname+"|"+ccop+"|"+fccop+"|"+img+"|"+money+"|"+info);
        var insertuser="/api/admin-service/insert_goods?";
        $.ajax({
            type: 'post',
            url:  insertuser+"goods_name="+ciname+"&cat="+ccop+"&fcat="+fccop+"&img="+img+"&money="+money+"&info="+info,
            async: true,
            success: function (res) {
                if (res){
                    alert("添加成功");
                    location.reload();
                }
            },
            error: function () {

            }
        })
    }
}
function selectClothing(page) {
    var item = document.getElementById("clothing-row");
    item.innerHTML = "";
    var nu="";
    var sku=document.getElementById("c-text_or_name").value;
    var c =document.getElementById("c-f-select");
    var ci = c.selectedIndex;
    var opi=c.options[ci].getAttribute("v");
    if (opi==-1){
        opi=nu;
    }
    var fc=document.getElementById("c-select ");
    var fci = fc.selectedIndex;
    var opfi = fc.options[fci].getAttribute("v");
    if (opfi==-1){
        opfi=nu;
    }
    var getClothingUrl = "/api/admin-service/get_all_goods?";
    console.log(page+"|"+sku+"|"+opi+"|"+opfi);
    $.ajax({
        type: 'get',
        url: getClothingUrl + "page="+page+"&sku="+sku+"&c="+opi+"&fc="+opfi,
        async: true,
        success: function (res) {
            console.log(res);
            document.getElementById("c-page").value=res.page;
            document.getElementById("c-allpage").innerHTML=res.allpage;
            var inn = '';
            var list = res.list;
            for (var a=0;a<list.length;a++){
                inn+=' <div class="row">' +
                    '                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">' +
                    '                                '+list[a].sku +
                    '                            </div>' +
                    '                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">' +
                    '                                <span>'+list[a].goodsName+'</span>' +
                    '                            </div>' +
                    '                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">' +
                    '                                <img src="../'+list[a].img+'" height="50px"/>' +
                    '                            </div>' +
                    '                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">' +
                    '                                '+list[a].categroyName +
                    '                            </div>' +
                    '                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">' +
                    '                                '+list[a].fCategrationName +
                    '                            </div>' +
                    '                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">' +
                    '                                <button sku="'+list[a].sku+'" class="c-b-delete btn btn-danger btn-xs" data-toggle="modal">' +
                    '                                    删除' +
                    '                                </button>' +
                    '                            </div>' +
                    '                        </div>'
            }
            document.getElementById("clothing-row").innerHTML=inn;

            var cdelete = document.getElementsByClassName("c-b-delete");
            for (var a=0;a<cdelete.length;a++){
                cdelete[a].onclick=function(ev){
                    var boolean=window.confirm("确认要删除吗？")
                    if(boolean){
                        var sku= ev.currentTarget.getAttribute("sku");
                        deleteCloth(sku);
                    }
                }
            }
        },
        error: function () {

        }
    })
}

function deleteCloth(sku){
    var url="/api/admin-service/delete_goods?";
    $.ajax({
        type: 'post',
        url:  url+"sku="+sku,
        async: true,
        success: function (res) {
            if (res){
                alert("删除成功");
                location.reload();
            }
        },
        error: function () {

        }
    })

}



selectClothing(1);
document.getElementById("c-sl-btn").onclick=function (ev) {
    var page = document.getElementById("c-page").value;
    selectClothing(page);
}
document.getElementById("c-go").onclick=function (ev) {
    var page = document.getElementById("c-page").value;
    selectClothing(page);
}

document.getElementById("c-i-add").onclick=function (ev) {
    insertClothin();
}
