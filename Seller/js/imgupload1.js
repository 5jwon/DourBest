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
