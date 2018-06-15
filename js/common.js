$(document).ready(function () {
    console.log('common.js执行')
    //[头部]男装、女装、运动装、休闲装的跳转
    $('#big-catelog').click(function (e) {
        var num = parseInt($(e.target).attr('data-num'), 10)
        console.log(num)
        window.location.href = "xiangqing.html?c=" + num;
    })
})