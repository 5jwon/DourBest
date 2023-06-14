$('#optionName').keyup(function (e){
    var content = $(this).val();
    $('#count').html(50 - content.length);
})

$('#option-Info').keyup(function (e){
    var content = $(this).val();
    $('#count1').html(300 - content.length);
})

function limit(obj,cnt) {
    if (obj.value.length>cnt) obj.value = obj.value.substring(0, cnt);
    document.getElementById('memoLength').innerHTML = cnt-obj.value.length;
};

$.datepicker.setDefaults({
    dateFormat: 'yy년 mm월 dd일',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년',
    minDate: +6
});

$(function () {
    $('.datepicker').datepicker();
});