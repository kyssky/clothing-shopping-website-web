$(document).ready(function () {
    console.log('xiangqing.js执行')
    var clothingtype = {
        0: "衬衫", 1: "大衣", 2: "T恤衫", 3: "短裤", 4: "卫衣", 5: "平底鞋", 6: "长裤"
    }

    var url = "api/goods-service/get_all_goods_by_categration";
    var fcategration = getQueryString("c");

    var hrefs = document.querySelectorAll('.show-more a');
    if (hrefs) {
        console.log('yiyou')
        for (var i = 0; i < hrefs.length; i++) {
            var key = i;
            var aUrl = 'xiangqing2.html?c=' + fcategration +
            '&subc=' + $(hrefs[i]).attr("data-subc");

            hrefs[i].href = aUrl
        }
    } else {
        console.log('haimeiyou')
    }


    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    }

    function getLitleCategory(f) {
        switch (f) {
            case '0':
                return '男装'
                break;
            case '1':
                return '女装'
                break

            case '2':
                return '休闲装'
                break;

            case '3':
                return '运动装'
                break;

            default:
                break;
        }
    }

    function getchun() {
        var type = "&categration=0";
        var page = 1;
        var pageSize = 6;
        var mydocument = document.getElementById("chun");
        var documentItem;
        $.ajax({
            type: "get",
            url: url + "?page=" + page + "&pageSize=" + pageSize + type + "&fcategration=" + fcategration,
            async: true,
            success: function (result) {
                console.log(result);
                var dateArr = result.infomation;
                if (dateArr.length === 0) {
                    return
                }
                var string = "";
                for (var a=0;a<dateArr.length&&a<6;a++){
                    string+='<div class="clothing-item col-xs-4" style="margin-bottom: 1.5rem" data-sku="' + dateArr[a].sku + '">' +
                        '                <img class="col-xs-12" src="' + dateArr[a].img + '"/>' +
                        '                <div class="col-xs-12 ppp">' +
                        '                    <div class="men-1-name">' + dateArr[a].goodsName + '</div>' +
                        '                    <div class="men-1-j">' + dateArr[a].information + '</div>' +
                        '                    <div class="men-1-money">' + dateArr[a].money + '</div>' +
                        '                </div>'+
                        '            </div>';
                };
                // console.log(string);
                mydocument.innerHTML += string;
                $('.clothing-item').click(function (e) {
                    window.open('goods-item.html?sku=' + $(this).attr("data-sku"))
                })
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }

    function getxia() {
        var type = "&categration=1";
        var page = 1;

        var pageSive = 6;
        var mydocument = document.getElementById("xia");
        var documentItem;
        $.ajax({
            type: "get",
            url: url + "?page=" + page + "&pageSize=" + pageSive + type + "&fcategration=" + fcategration,
            async: true,
            success: function (result) {
                console.log(result);
                var dateArr = result.infomation;
                if (dateArr.length === 0) {
                    return
                }
                var string = "";
                for (var a=0;a<dateArr.length&&a<6;a++){
                    string+='<div class="clothing-item col-xs-4" style="margin-bottom: 1.5rem" data-sku="' + dateArr[a].sku + '">' +
                        '                <img class="col-xs-12" src="' + dateArr[a].img + '"/>' +
                        '                <div class="col-xs-12 ppp">' +
                        '                    <div class="men-1-name">' + dateArr[a].goodsName + '</div>' +
                        '                    <div class="men-1-j">' + dateArr[a].information + '</div>' +
                        '                    <div class="men-1-money">' + dateArr[a].money + '</div>' +
                        '                </div>'+
                        '            </div>';
                };
                // console.log(string);
                mydocument.innerHTML += string;
                $('.clothing-item').click(function (e) {
                    window.open('goods-item.html?sku=' + $(this).attr("data-sku"))
                })
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }

    function getqiu() {
        var type = "&categration=2";
        var page = 1;

        var pageSive = 6;
        var mydocument = document.getElementById("qiu");
        var documentItem;
        $.ajax({
            type: "get",
            url: url + "?page=" + page + "&pageSize=" + pageSive + type + "&fcategration=" + fcategration,
            async: true,
            success: function (result) {
                console.log(result);
                var dateArr = result.infomation;
                if (dateArr.length === 0) {
                    return
                }
                var string = "";
                for (var a=0;a<dateArr.length&&a<6;a++){
                    string+='<div class="clothing-item col-xs-4" style="margin-bottom: 1.5rem" data-sku="' + dateArr[a].sku + '">' +
                        '                <img class="col-xs-12" src="' + dateArr[a].img + '"/>' +
                        '                <div class="col-xs-12 ppp">' +
                        '                    <div class="men-1-name">' + dateArr[a].goodsName + '</div>' +
                        '                    <div class="men-1-j">' + dateArr[a].information + '</div>' +
                        '                    <div class="men-1-money">' + dateArr[a].money + '</div>' +
                        '                </div>'+
                        '            </div>';
                };
                mydocument.innerHTML += string;
                $('.clothing-item').click(function (e) {
                    window.open('goods-item.html?sku=' + $(this).attr("data-sku"))
                })
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }

    function getdong() {
        var type = "&categration=3";
        var page = 1;

        var pageSize = 6;
        var mydocument = document.getElementById("dong");
        var documentItem;
        $.ajax({
            type: "get",
            url: url + "?page=" + page + "&pageSize=" + pageSize + type + "&fcategration=" + fcategration,
            async: true,
            success: function (result) {
                console.log(result);
                var dateArr = result.infomation;
                if (dateArr.length === 0) {
                    return
                }
                var string = "";
                for (var a=0;a<dateArr.length&&a<6;a++){
                    string+='<div class="clothing-item col-xs-4" style="margin-bottom: 1.5rem" data-sku="' + dateArr[a].sku + '">' +
                        '                <img class="col-xs-12" src="' + dateArr[a].img + '"/>' +
                        '                <div class="col-xs-12 ppp">' +
                        '                    <div class="men-1-name">' + dateArr[a].goodsName + '</div>' +
                        '                    <div class="men-1-j">' + dateArr[a].information + '</div>' +
                        '                    <div class="men-1-money">' + dateArr[a].money + '</div>' +
                        '                </div>'+
                        '            </div>';
                };
                // console.log(string);
                mydocument.innerHTML += string;
                $('.clothing-item').click(function (e) {
                    window.open('goods-item.html?sku=' + $(this).attr("data-sku"))
                })
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }
    function get4() {
        var type = "&categration=4";
        var page = 1;

        var pageSize = 6;
        var mydocument = document.getElementById("dong4");
        var documentItem;
        $.ajax({
            type: "get",
            url: url + "?page=" + page + "&pageSize=" + pageSize + type + "&fcategration=" + fcategration,
            async: true,
            success: function (result) {
                console.log(result);
                var dateArr = result.infomation;
                if (dateArr.length === 0) {
                    return
                }
                var string = "";
                for (var a=0;a<dateArr.length&&a<6;a++){
                    string+='<div class="clothing-item col-xs-4" style="margin-bottom: 1.5rem" data-sku="' + dateArr[a].sku + '">' +
                        '                <img class="col-xs-12" src="' + dateArr[a].img + '"/>' +
                        '                <div class="col-xs-12 ppp">' +
                        '                    <div class="men-1-name">' + dateArr[a].goodsName + '</div>' +
                        '                    <div class="men-1-j">' + dateArr[a].information + '</div>' +
                        '                    <div class="men-1-money">' + dateArr[a].money + '</div>' +
                        '                </div>'+
                        '            </div>';
                };
                // console.log(string);
                mydocument.innerHTML += string;
                $('.clothing-item').click(function (e) {
                    window.open('goods-item.html?sku=' + $(this).attr("data-sku"))
                })
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }

    function get5() {
        var type = "&categration=5";
        var page = 1;

        var pageSize = 6;
        var mydocument = document.getElementById("dong5");
        var documentItem;
        $.ajax({
            type: "get",
            url: url + "?page=" + page + "&pageSize=" + pageSize + type + "&fcategration=" + fcategration,
            async: true,
            success: function (result) {
                console.log(result);
                var dateArr = result.infomation;
                if (dateArr.length === 0) {
                    return
                }
                var string = "";
                for (var a=0;a<dateArr.length&&a<6;a++){
                    string+='<div class="clothing-item col-xs-4" style="margin-bottom: 1.5rem" data-sku="' + dateArr[a].sku + '">' +
                        '                <img class="col-xs-12" src="' + dateArr[a].img + '"/>' +
                        '                <div class="col-xs-12 ppp">' +
                        '                    <div class="men-1-name">' + dateArr[a].goodsName + '</div>' +
                        '                    <div class="men-1-j">' + dateArr[a].information + '</div>' +
                        '                    <div class="men-1-money">' + dateArr[a].money + '</div>' +
                        '                </div>'+
                        '            </div>';
                };
                // console.log(string);
                mydocument.innerHTML += string;
                $('.clothing-item').click(function (e) {
                    window.open('goods-item.html?sku=' + $(this).attr("data-sku"))
                })
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }

    function get6() {
        var type = "&categration=6";
        var page = 1;

        var pageSize = 6;
        var mydocument = document.getElementById("dong6");
        var documentItem;
        $.ajax({
            type: "get",
            url: url + "?page=" + page + "&pageSize=" + pageSize + type + "&fcategration=" + fcategration,
            async: true,
            success: function (result) {
                console.log(result);
                var dateArr = result.infomation;
                if (dateArr.length === 0) {
                    return
                }
                var string = "";
                for (var a=0;a<dateArr.length&&a<6;a++){
                    string+='<div class="clothing-item col-xs-4" style="margin-bottom: 1.5rem" data-sku="' + dateArr[a].sku + '">' +
                        '                <img class="col-xs-12" src="' + dateArr[a].img + '"/>' +
                        '                <div class="col-xs-12 ppp">' +
                        '                    <div class="men-1-name">' + dateArr[a].goodsName + '</div>' +
                        '                    <div class="men-1-j">' + dateArr[a].information + '</div>' +
                        '                    <div class="men-1-money">' + dateArr[a].money + '</div>' +
                        '                </div>'+
                        '            </div>';
                };
                // console.log(string);
                mydocument.innerHTML += string;
                $('.clothing-item').click(function (e) {
                    window.open('goods-item.html?sku=' + $(this).attr("data-sku"))
                })
            },
            error: function (jqXHR, textStatus, errorThrown) {

            }
        });
    }
    getchun();
    getxia();
    getqiu();
    getdong();
    get4();
    get5();
    get6();
// document.getElementsByClassName('litle-cate-text')[0].innerText = getLitleCategory(fcategration)
    $('.litle-cate-text')[0].innerText = getLitleCategory(fcategration)

    $('.categration-name').each(function () {
        $(this).text( clothingtype[$(this).attr("data-subc") ]  )
    })
})



