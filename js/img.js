var imgsrc=['icon/banner.jpg','icon/goods-card.png','icon/user.png'];
var imgIndex=0;
function imgchange(var imgdom){
    imgdom.src=imgsrc[imgIndex];
    imgIndex=imgIndex+1>=imgsrc.length?0:imgIndex+1;
}