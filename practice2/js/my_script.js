$(function(){
    $("#search_button").click(function(){
        var param = {
            zipcode: $("#zip_code").val(),
            limit: 1
        }

        $.ajax({
            type:'GET',
            cache: false,
            data: param,
            url: "https://zipcloud.ibsnet.co.jp/api/search",
            dataType: "jsonp",
            success: function(data) {
                var result_txt = "";
                if (data.status == 200) {
                    // 通信正常
                    if (data.results == null) {
                        // 該当する住所がない場合
                        result_txt += "<div>該当する住所がありませんでした。</div>"
                    } else {
                        // 該当する住所がある場合
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
                }else {
                    // 通信エラー
                    $("#search_result").html(data.message);
                }
            }
        })
    });
 });