// $.ajax({
//     type:"post",
//     url:url,
//     dataType: "json",
//     contentType: "application/json",
//     async:true,
//     data:JSON.stringify(param),
//     success:function(result){
//         if(result.code == "0"){
//             var rows = result.data;
//             if(typeof successcallback == 'function'){successcallback(rows);}else{alert(result.msg);}
//         }else{
//             alert(result.msg);
//         }
//     },
//     error:function(jqXHR, textStatus, errorThrown){
// //alert("提交失败，请重试！");
//     }
// });
$(document).ready(function () {
    console.log('index.js')
    $('.recomment-title').click(function (e) {
        var num = parseInt($(e.target).attr('data-num'), 10)
        window.location.href = "xiangqing.html?c=" + num;
    })

    $('.carousel-inner .item').click(function (e) {
        window.open('goods-item.html?sku='+$(this).attr("data-sku"))
    })
})