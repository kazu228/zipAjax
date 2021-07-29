$(function(){
    $("#search-button").click(function(){
        var param = {
            zipcode : $("#zip-code").val(),
            limit: 1
        }

        // ajax通信
        $.ajax({
            type: "GET",
            chche: false,
            data: param,
            url: "https://zipcloud.ibsnet.co.jp/api/search",
            dataType: "jsonp",
            success: function() {
                
            }
        });
    });
});