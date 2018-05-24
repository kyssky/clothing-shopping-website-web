$.ajax({
    type:"post",
    url:url,
    dataType: "json",
    contentType: "application/json",
    async:true,
    data:JSON.stringify(param),
    success:function(result){
        if(result.code == "0"){
            var rows = result.data;
            if(typeof successcallback == 'function'){successcallback(rows);}else{alert(result.msg);}
        }else{
            alert(result.msg);
        }
    },
    error:function(jqXHR, textStatus, errorThrown){
//alert("提交失败，请重试！");
    }
});
