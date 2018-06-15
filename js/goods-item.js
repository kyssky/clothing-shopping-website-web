var goodInfo;
url = "api/user-service/is_login"

var uuuu;

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

var sSize = null;
var sColor = null;
//[头部]男装、女装、运动装、休闲装的跳转
$('#big-catelog').click(function (e) {
    console.log(e.target)
    var num = parseInt($(e.target).attr('data-num'), 10)
    console.log(num)
    window.location.href = "xiangqing.html?c=" + num;
})

var sizeArr = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
var colorArr = ['红', '黑', '蓝', '橙', '绿', '芒果色']
var url = "api/goods-service/get_goods_information?sku=";
var litleCate = $('.litle-cate-text');
var sku = getQueryString('sku');

$.ajax({
    type: 'get',
    url: url + sku,
    async: true,
    success: function (res) {
        console.log(res)
        $(litleCate[0]).text(res.fCategrationName + '/')
        $(litleCate[1]).text(res.categroyName);

        $('.good-img').attr("src", res.img)
        $('.cloth-info').text(res.information)

        $('.cloth-sku').text(res.sku)
        $('.cloth-name').text(res.goodsName)
        if (res.discountMoney > 0) {
            var mmm = res.money - res.discountMoney
            var iii = '<span class=".text-danger h2"><del>' + res.money + '¥</del></span>\n' +
                '                    <span class=".text-danger h2" style="margin-left: 2rem">' + mmm + '¥</span>\n' +
                '                    <span class=".text-danger h5" style="color: red">' + res.style + '</span>'
            $('.cloth-money').html(iii);

        } else {
            $('.cloth-money>span').text(res.money).css("color", "red");
        }

        $('.goods-inv').text('当前库存量：' + res.inventory);
        goodInfo = res;

        var sizeStr = '<strong> SIZE</strong>';
        for (var i = 0; i < sizeArr.length; i++) {
            sizeStr += '<input class="s-size" value="' + sizeArr[i] + '" name="size" type="radio" style="margin: 1rem">' + sizeArr[i] + '</input>'

        }
        $('.cloth-size').html(sizeStr)


        var colorStr = '<strong>主要颜色</strong>';
        for (var i = 0; i < colorArr.length; i++) {

            colorStr += '<input class="s-color" name="color" value="' + colorArr[i] + '" type="radio" style="margin: 1rem">' + colorArr[i] + '</input>'

        }
        $('.cloth-color').html(colorStr)
        var ddd = document.getElementById("cccc");
        var inn = '<div class="col-xs-2 col-xs-offset-1" style="padding: 0px">' + '主页/' + '</div>'
        inn += '  <div class="col-xs-2 col-xs-offset-1" style="padding: 0px">' + res.fCategrationName + '/</div>'
        inn += '  <div class="col-xs-2 col-xs-offset-1" style="padding: 0px">' + res.categroyName + '/</div>'
        inn += '  <div class="col-xs-2 col-xs-offset-1" style="padding: 0px">' + res.goodsName + '</div>'
        ddd.innerHTML = inn;
        var allsize = $('.s-size');
        for (var a = 0; a < allsize.length; a++) {
            allsize[a].onclick = function (ev) {
                console.log(ev.currentTarget.value);
                sSize = ev.currentTarget.value
            }
        }
        var allcolor = $('.s-color');
        for (var a = 0; a < allcolor.length; a++) {
            allcolor[a].onclick = function (ev) {
                console.log(ev.currentTarget.value);
                sColor = ev.currentTarget.value;
            }
        }
    },
    error: function () {

    }
})
//选择商品数量
$('.jian-btn').click(function (e) {
    var num = parseInt($(this).parent().next().val(), 10);
    if (parseInt(num, 10) > 1) {
        $(this).parent().next().val(num - 1)
    }
})
$('.add-btn').click(function (e) {
    var num = parseInt($(this).parent().prev().val(), 10);

    $(this).parent().prev().val(num + 1)

})


//    添加到购物车
$('.add-gouwuche button').click(function (e) {
    var addGWUrl = 'api/goodscarts-service/add_goods_in_cards?sku=';
    console.log(uuuu);
    var number = document.getElementById("goumaiNum").value;
    var discount = goodInfo.discountMoney;
    var discountNmae = goodInfo.style;
    if (sSize == null || sColor == null) {
        alert("请选择颜色和尺码")
    }
    else if (uuuu == null) {
        alert("请先登入")
    } else {


        console.log(number + "|" + discount + "|" + discountNmae + "|" + sSize + "|" + sColor + "|" + sku)
        urliii = "api/goodscarts-service/add_goods_in_cards?";
        $.ajax({
            type: 'get',
            url: urliii + "sku=" + sku + "&userCode=" + uuuu.userCode + "&number=" + number + "&color=" + sColor + "&size=" + sSize + "&discount=" + discount + "&discount_style=" + discountNmae,
            async: true,
            success: function (res) {
                if (res > 0) {
                    alert("加入购物车成功")
                    location.reload();
                }
            }
            ,
            error: function () {

            }
        })
    }
})


//弹出况
$('.modal-footer button').each(function (index) {
    $(this).click(function () {
        if (index === 1) {
            window.location = '/goods-cart.html';
        }
    })
})
