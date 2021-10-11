// var beforeTrans = document.querySelector("#beforeTrans").value;
var submitBtn = document.querySelector("#TransSubmit");
submitBtn.addEventListener("click", DoTrans);

var doTrans = Document.querySelector("#beforeTrans");
doTrans.addEventListener("keydown", DoTrans);

function DoTrans() {
    var target = $("#beforeTrans").val();
    var src_lang = $('#src_lang').val();
    var target_lang = $('#target_lang').val();

    console.log(target);
    console.log(src_lang);
    console.log(target_lang);

    $.ajax({ //api 호출
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