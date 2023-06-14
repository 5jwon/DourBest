function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview1').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview1').hide();
            $('#imagePreview1').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload1").change(function() {
    readURL(this);
});

$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });
});

$('#summary').keyup(function (e){
    var content = $(this).val();
    $('#count').html(100 - content.length);
})

function limit(obj,cnt) {
    if (obj.value.length>cnt) obj.value = obj.value.substring(0, cnt);
    document.getElementById('memoLength').innerHTML = cnt-obj.value.length;
};

// $(document).ready(function() {
//     $('#summernote').summernote({
//         height: 300,
//         minHeight: null,
//         maxHeight: null,
//         focus: false,
//         lang: "ko-KR",
//         placeholder: '내용을 입력해주세요.',
//         width : 800
//     })
// })

$('#summernote').summernote({
    toolbar: [
          // [groupName, [list of button]]
        ['fontname', ['fontname']],
        ['fontsize', ['fontsize']],
        ['style', ['bold', 'italic', 'underline','strikethrough', 'clear']],
        ['color', ['forecolor','color']],
        ['table', ['table']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['insert',['picture','link','video']],
        ],
    fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New','맑은 고딕','궁서','굴림체','굴림','돋움체','바탕체'],
    fontSizes: ['8','9','10','11','12','14','16','18','20','22','24','28','30','36','50','72'],
    height: 300,
    width: 800,
    placeholder: '내용을 입력해주세요'
});