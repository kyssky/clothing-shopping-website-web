var getGoodsByFatherCategration = "api/goods-service/get_all_fgoods_by_categration?page=1&pageSize=6";


function getMan() {
    var type = "&fcategration=0";
    var result;
    var mydocument = document.getElementById("men");
    var documentItem;
    $.ajax({
        type: "get",
        url: getGoodsByFatherCategration + type,
        async: true,
        success: function (result) {
            console.log(result);
            result = result;
            var dateArr = result.infomation;
            documentItem = '<div class="row col-xs-10 col-xs-offset-1">' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="' + dateArr[0].sku + '" >' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[0].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[0].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[0].information + '</div>' +
                '                    <div class="men-1-money">' + dateArr[0].money + '</div>' +
                '                </div>' +
                '   </div>' +
                '   <div class="row good-item" data-sku="' + dateArr[1].sku + '" >' +
                '              <img class="men-1 col-xs-12" src="' + dateArr[1].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[1].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[1].information + '</div>' +
                '                    <div class="men-1-money">' + dateArr[1].money + '</div>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="' + dateArr[2].sku + '" >' +
                '                <img class="men-1 col-xs-12 length-up" src="' + dateArr[2].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp2">' +
                '                    <div class="men-1-name">' + dateArr[2].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[2].information + '</div>' +
                '                    <div class="men-1-money">' + dateArr[2].money + '</div>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="' + dateArr[3].sku + '" >' +
                '                <img class="men-1 col-xs-12 length-up" src="' + dateArr[3].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp2">' +
                '                    <div class="men-1-name">' + dateArr[3].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[3].information + '</div>' +
                '                    <div class="men-1-money">' + dateArr[3].money + '</div>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="' + dateArr[4].sku + '" >' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[4].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[4].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[4].information + '</div>' +
                '                    <div class="men-1-money">' + dateArr[4].money + '</div>' +
                '                </div>' +
                '           </div>' +
                '           <div class="row good-item" data-sku="' + dateArr[5].sku + '">' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[5].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[5].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[5].information + '</div>' +
                '                    <div class="men-1-money">' + dateArr[5].money + '</div>' +
                '                </div>' +
                '           </div>' +
                '        </div>' +
                '    </div>'
            mydocument.innerHTML = documentItem;
            $('.good-item').click(function (e) {
                window.open('goods-item.html?sku='+$(this).attr("data-sku"))
            })
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function getWomen() {
    var type = "&fcategration=1";
    var result;
    var mydocument = document.getElementById("women");
    var documentItem;
    $.ajax({
        type: "get",
        url: getGoodsByFatherCategration + type,
        async: true,
        success: function (result) {
            console.log(result);
            result = result;
            var dateArr = result.infomation;
            documentItem = '<div class="row col-xs-10 col-xs-offset-1">' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[0].sku+'" >' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[0].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[0].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[0].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[0].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '            <div class="row good-item" data-sku="'+dateArr[1].sku+'" >' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[1].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[1].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[1].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[1].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[2].sku+'" >' +
                '                <img class="men-1 col-xs-12 length-up" src="' + dateArr[2].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp2">' +
                '                    <div class="men-1-name">' + dateArr[2].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[2].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[2].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[3].sku+'" >' +
                '                <img class="men-1 col-xs-12 length-up" src="' + dateArr[3].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp2">' +
                '                    <div class="men-1-name">' + dateArr[3].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[3].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[3].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[4].sku +'" >' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[4].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[4].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[4].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[4].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '            <div class="row good-item" data-sku="' + dateArr[5].sku + '">' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[5].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[5].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[5].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[5].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '    </div>'
            mydocument.innerHTML = documentItem;
            $('.good-item').click(function (e) {

                window.open('goods-item.html?sku='+$(this).attr("data-sku"))
            })
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function getYun() {
    var type = "&fcategration=2";
    var result;
    var mydocument = document.getElementById("xiu");
    var documentItem;
    $.ajax({
        type: "get",
        url: getGoodsByFatherCategration + type,
        async: true,
        success: function (result) {
            console.log(result);
            result = result;
            var dateArr = result.infomation;
            documentItem =  '<div class="row col-xs-10 col-xs-offset-1">' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[0].sku+'" >' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[0].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[0].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[0].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[0].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '            <div class="row good-item" data-sku="'+dateArr[1].sku+'" >' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[1].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[1].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[1].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[1].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[2].sku+'" >' +
                '                <img class="men-1 col-xs-12 length-up" src="' + dateArr[2].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp2">' +
                '                    <div class="men-1-name">' + dateArr[2].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[2].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[2].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[3].sku+'" >' +
                '                <img class="men-1 col-xs-12 length-up" src="' + dateArr[3].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp2">' +
                '                    <div class="men-1-name">' + dateArr[3].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[3].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[3].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[4].sku +'" >' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[4].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[4].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[4].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[4].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '            <div class="row good-item" data-sku="' + dateArr[5].sku + '">' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[5].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[5].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[5].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[5].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '    </div>'
            mydocument.innerHTML = documentItem;
            $('.good-item').click(function (e) {

                window.open('goods-item.html?sku='+$(this).attr("data-sku"))
            })
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function getXiu() {
    var type = "&fcategration=3";
    var result;
    var mydocument = document.getElementById("yun");
    var documentItem;
    $.ajax({
        type: "get",
        url: getGoodsByFatherCategration + type,
        async: true,
        success: function (result) {
            console.log(result);
            result = result;
            var dateArr = result.infomation;
            documentItem =  '<div class="row col-xs-10 col-xs-offset-1">' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[0].sku+'" >' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[0].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[0].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[0].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[0].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '            <div class="row good-item" data-sku="'+dateArr[1].sku+'" >' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[1].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[1].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[1].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[1].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[2].sku+'" >' +
                '                <img class="men-1 col-xs-12 length-up" src="' + dateArr[2].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp2">' +
                '                    <div class="men-1-name">' + dateArr[2].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[2].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[2].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[3].sku+'" >' +
                '                <img class="men-1 col-xs-12 length-up" src="' + dateArr[3].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp2">' +
                '                    <div class="men-1-name">' + dateArr[3].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[3].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[3].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        <div class="col-xs-3">' +
                '            <div class="row good-item" data-sku="'+dateArr[4].sku +'" >' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[4].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[4].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[4].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[4].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '            <div class="row good-item" data-sku="' + dateArr[5].sku + '">' +
                '                <img class="men-1 col-xs-12" src="' + dateArr[5].img + '"/>' +
                '                <div class="men-1-info col-xs-12 ppp">' +
                '                    <div class="men-1-name">' + dateArr[5].goodsName + '</div>' +
                '                    <div class="men-1-j">' + dateArr[5].information + '</div>' +
                '                    <dimenv class="men-1-money">' + dateArr[5].money + '</dimenv>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '    </div>'
            mydocument.innerHTML = documentItem;
            $('.good-item').click(function (e) {

                window.open('goods-item.html?sku='+$(this).attr("data-sku"))
            })
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

getMan();
getWomen();
getYun();
getXiu();



