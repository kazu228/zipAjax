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
            success: function(data) {
                var result_txt = "";
                if(data.status == 200) {
                    // 通信成功
                    if (data.results == null) {
                        // 該当するデータなし
                        result_txt += "<div>該当する住所がありませんでした。</div>"
                    } else {
                        // 該当するデータあり
                        result_txt += "<div>住所" + data.results[0].address1 + 
                        data.results[0].address2 + 
                        data.results[0].address3 + "</div><br>" +
                        "<div>カナ：" + 
                        data.results[0].kana1 + 
                        data.results[0].kana2 + 
                        data.results[0].kana3 + 
                        "</div><br>";
                    }
                } else {
                    // 通信失敗
                    result_txt += "<div>" + data.message + "</div>"
                }
                $("#search-result").html(result_txt);
            }
        });
    });
});