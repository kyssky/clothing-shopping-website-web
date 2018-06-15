
$(document).ready(function () {
    var url = "api/user-service/is_login";
    var uuuu;
    function isLogin(){
        $.ajax({
            type: "get",
            url: url,
            async: false,
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
            async: false,
            success: function (result) {
                document.getElementById("card-iii").innerText="购物车("+result.length+")";
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("接口调用失败")
            }
        });
    }
    isLogin();
    console.log('common.js执行')
    //[头部]男装、女装、运动装、休闲装的跳转
    $('#big-catelog').click(function (e) {
        var num = parseInt($(e.target).attr('data-num'), 10)
        console.log(num)
        window.location.href = "xiangqing.html?c=" + num;
    })

//    请求购物车的数据
    var getGWInfoUrl = 'api/goodscarts-service/get_all_user_goods?userCode=';
    var userCode = uuuu.userCode;
    console.log(uuuu.userCode);
    $.ajax({
        type: 'get',
        url: getGWInfoUrl + userCode,
        async: false,
        success: function (res) {
            console.log(res)
            var dateArr = res;
            $('.no-info').addClass('hide')
            $('.my-gouwuCart').text('我的购物车('+ dateArr.length+')');
            var allMoney = 0;
            if (res.length === 0) {
            } else {
                var str = "";
                var inf = $('.info')[0]
                for (var i = 0; i < dateArr.length; i++) {
                    str += ' <div class="row cloth-item" data-sku="' + dateArr[i].sku + '" >' +
                        '        <div class="g-img col-xs-3 col-xs-offset-1">' +
                        '            <a href="goods-item.html?sku='+dateArr[i].sku+'"><img src="' + dateArr[i].img + '" class="pppp col-xs-12"/></a>' +
                        '        </div>' +
                        '        <div class="g-name col-xs-4">' +
                        '            <div class="g-info">' + dateArr[i].information + ' </div>' +
                        '            <div class="g-money">单价：' + dateArr[i].money + '￥</div>' +
                        '            <div class="g-money">size：' + dateArr[i].size + '</div>' +
                        '            <div class="g-money">color：' + dateArr[i].color + '</div>' +
                        '        </div>' +
                        '        <div class="g-number col-xs-2">' +
                        '            <div class="input-group">' +
                        '                <input type="text" disabled class="form-control" value="' + dateArr[i].skuNumber + '" style="width: 50px;" >' +
                        '            </div>' +
                        '        </div>' +
                        '        <div class="g-config col-xs-2">' +
                        '            <button class="g-delete btn btn-danger">删除</button>' +
                        '        </div>' +
                        '    </div>';
                    allMoney+= dateArr[i].allMoney
                }
                $(inf).html(str);
                $('.g-delete').each(function (index) {
                    $(this).click(function (e) {
                        var theRow = $(this).parents(".row");
                        console.log( theRow[0].parentNode.removeChild(theRow[0]) )
                        var sku =  theRow.attr("data-sku");
                        deleteItem(sku)
                    })
                })

                //    加减数量
                $('.jian-btn').click(function (e) {
                    var num = parseInt($(this).parent().next().val(), 10);
                    if (parseInt(num, 10) > 1) {
                        $(this).parent().next().val(num - 1)
                        //    修改总金额
                    }
                })
                $('.add-btn').click(function (e) {
                    var num = parseInt($(this).parent().prev().val(), 10);
                    $(this).parent().prev().val(num + 1)
                })
                $('.all-money').text(allMoney)
            }
        },
        error: function () {
        }
    })
    function  deleteItem(sku) {
        var deleteUrl = 'api/goodscarts-service/delete_goods_carts?userCode='
        var userCode = uuuu.userCode;

        $.ajax({
            type: 'get',
            url: deleteUrl+ userCode + '&sku='+ sku,
            async: true,
            success: function (res) {
                console.log(res)
                window.location.reload();
            },
            error: function () {

            }
        })
    }
    function createOrder(){
        var urlkkk = "api/order-service/create_order?";
        var userCode=uuuu.userCode;
        $.ajax({
            type: 'get',
            url: urlkkk+"userCode="+userCode,
            async: false,
            success: function (res) {
                res=JSON.parse(res);
                if(res.code) {
                    alert("下单成功")
                    window.location.reload();
                }else {
                    console.log(res.code);
                    setTimeout(function(){alert("下单失败："+res['name']+"-库存不足")});
                }
            },
            error: function () {
                alert("下单异常");
            }
        })
    }

    document.getElementById("create-order").onclick=function (ev) {
        createOrder();
    }
})