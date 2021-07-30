$(function(){
    //ここにメインの処理を記述
    $("#search-button").click(function(){
        var param = {
          zipcode: $("#zip-code").val(),
          limit: 1  
        }

        $.ajax({
            type: "GET",
            chche: false,
            url: "https://zipcloud.ibsnet.co.jp/api/search",
            data: param,
            dataType: "jsonp",
            success: function(data) {
                var result_txt = "";
                if(data.status == 200) {
                    if(data.results == null) {
                        result_txt += "<div>該当する住所がありませんでした。</div>"
                    } else {
                        result_txt += "<div>住所" + data.results[0].address1 + 
                        data.results[0].address2 + 
                        data.results[0].address3 + "</div><br>" +
                        "<div>カナ：" + 
                        data.results[0].kana1 + 
                        data.results[0].kana2 + 
                        data.results[0].kana3 + 
                        "</div><br>";
                    }
                    $("#search_result").html(result_txt);
                } else {
                    $("#search_result").html("<div>"+ data.message + "</div>");
                }
            }
        });
    });
});