$(document).ready(function () {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    //头部导航
    $('#big-catelog').click(function (e) {
        var num = parseInt($(e.target).attr('data-num'), 10)
        console.log(num)
        window.location.href = "xiangqing.html?c=" + num;
    })
    var clothingtype = {
        0: "衬衫", 1: "大衣", 2: "T恤衫", 3: "短裤", 4: "卫衣", 5: "平底鞋", 6: "长裤"
    }
    var category = {0: '男装', 1: '女装', 2: '休闲装', 3: '运动装'}

    var c = getQueryString('c'), subc = getQueryString('subc');

    var subtitle = clothingtype[subc];
    $('.categration-name').text(subtitle)

    $('.litle-cate-text').each(function (index) {
        if (index == 0) {
            var title = category[c]
            $(this).text(title + ' /')
        }
        if (index === 1) {
            $(this).text(subtitle)
        }
    })
    getinfo(1, 6)

    function getinfo(page, pageSize) {
        var url = "api/goods-service/get_all_goods_by_categration";
        var categration = "&categration=" + subc;
        var fcategration = "&fcategration=" + c;

        var mydocument = document.getElementById("chun");

        $.ajax({
            type: "get",
            url: url + "?page=" + page + "&pageSize=" + pageSize + categration + fcategration,
            async: true,
            success: function (result) {
                console.log(result);
                var dateArr = result.infomation;
                var pageAll = result.pageAll || 4;
                var string = '';
                console.log(string);
                var innerString = "";
                for (var i = 0; i < dateArr.length; i++) {
                    innerString += '<div class="clothing-item col-xs-4" style="margin-bottom: 1.5rem" data-sku="' + dateArr[i].sku + '" >' +
                        '                <img class="col-xs-12" src="' + dateArr[i].img + '"/>' +
                        '                <div class="col-xs-12 ppp">' +
                        '                    <div class="men-1-name">' + dateArr[i].goodsName + '</div>' +
                        '                    <div class="men-1-j">' + dateArr[i].information + '</div>' +
                        '                    <div class="men-1-money">￥' + dateArr[i].money + '</div>' +
                        '                </div>' +
                        '            </div>';
                }
                var string =
                    '        <div class="row">' +
                    innerString
                '        </div>'
                mydocument.innerHTML = string;
                $('.clothing-item').click(function (e) {
                    window.open('goods-item.html?sku=' + $(this).attr("data-sku"))
                })
                //添加页码
                var pagination = $('.pagination');
                var str = '';

                if (pageAll > 3) {
                    var s = '';
                    for (var i = 0; i < pageAll; i++) {
                        if (i + 1 === page) {
                            s += '<li class="active" ><a href="#">' + parseInt((i + 1), 10) + '</a></li>'
                        } else {
                            s += '<li><a href="#">' + parseInt((i + 1), 10) + '</a></li>'
                        }

                    }
                    console.log(s)
                    str += '<li><a href="#">prev</a></li>' + s + '<li><a href="#">next</a></li>'
                } else {
                    for (var i = 0; i < pageAll; i++) {
                        if (i + 1 === page) {
                            str += '<li class="active" ><a href="#">' + parseInt((i + 1), 10) + '</a></li>'
                        } else {
                            str += '<li><a href="#">' + parseInt((i + 1), 10) + '</a></li>'
                        }
                    }
                }

                pagination.html(str)
                var pageItem = $('.pagination li');
                pageItem.each(function (index) {
                    $(this).click(function () {
                        getinfo(parseInt($(this).text()), pageSize);
                    })
                })
            },
            error: function (jqXHR, textStatus, errorThrown) {
                document.getElementById("start-login")
            }
        });
    }
})