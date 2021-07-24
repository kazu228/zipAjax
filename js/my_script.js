$(function(){
    $("#search_button").click(function() {
        // リクエストパラメータ
        var param = {
            zipcode: $("#zip_code").val(),
            limit: 1
        }

        $.ajax({
            type: "GET",
            chche: false,
            data: param,
            url: https://zipcloud.ibsnet.co.jp/api/search,
            dataType: "jsonp",
            success: function(data) {
                if(data.status == 200){
                    //　正常
                }
                else {
                    // 通信失敗
                }
            }
        })
    });
});