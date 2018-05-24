var l = document.getElementsByClassName("l");
for (var a=0;a<l.length;a++){
    l.onclick=(function(a){
        var index =a;
        var litem = l[a];
        return function(){
            
        }
    })(a);
}
