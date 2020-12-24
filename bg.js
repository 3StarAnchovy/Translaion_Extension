        // var beforeTrans = document.querySelector("#beforeTrans").value;
        var submitBtn = document.querySelector("#TransSubmit");
        submitBtn.addEventListener("click", DoTrans);

        function DoTrans() {
            // const xmhl = new XMLHttpRequest();
            // xmhl.open('POST', "https://dapi.kakao.com/v2/translation/translate");
            // xmhl.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            // xmhl.setRequestHeader('Authorization', "KakaoAK 32dc4f706e880a7711d7a57429820538");
            // const data = {
            //     query: "자 들어가자",
            //     src_lang: "kr",
            //     target_lang: "en"
            // };
            // xmhl.send(Object.keys(data).map(key => `${key}=${data[key]}`).join('&'));
            // console.dir(xmhl);
            // console.log(typeof (xmhl.responseText));
            // console.log(xmhl);
            // var result = JSON.stringify(xmhl);
            // console.dir(result);
            // document.write(result);
            //document.getElementById('afterTrans').innerHTML = "result.translated_text";
            var target = $("#beforeTrans").val();
            var src_lang = $('#src_lang').val();
            var target_lang = $('#target_lang').val();
            console.log(target);
            console.log(src_lang);
            console.log(target_lang);
            $.ajax({
                    method: "POST",
                    url: "https://dapi.kakao.com/v2/translation/translate",
                    data: {
                        query: target,
                        src_lang: src_lang,
                        target_lang: target_lang
                    },
                    headers: {
                        Authorization: "KakaoAK 32dc4f706e880a7711d7a57429820538"
                    }
                })
                .done(function (msg) {
                    $("#afterTrans").val('');
                    console.log(msg.translated_text[0]);
                    $("#afterTrans").val(msg.translated_text[0]);
                });
        }