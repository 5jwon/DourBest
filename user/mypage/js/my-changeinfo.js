src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";


    function sample6_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('postcode').value = data.zonecode;
                document.getElementById("adress").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("ditailadress").focus();
            }
        }).open();
    }



//유효성검사 js

$(function() {
    var valid = {
        memberNickValid:true,
        memberEmailValid:true,
        memberLastNameValid:true,
        memberFirstNameValid:true,
        memberTelValid:true,
        memberBirthValid:true,
        isAllValid:function() {
			return this.memberIDValid && this.memberPWValid 
                    && this.memberPWCheckValid && this.memberNickValid 
                    && this.memberLastNameValid && this.memberFirstNameValid 
                    && this.memberTelValid && this.memberBirthValid;
		}
    }

    // 닉네임 검사
    $("[name=memberNick]").blur(function() {
        var regex = /^[가-힣0-9]{2,10}$/;
        var target = $(this)
        var memberNick = $(this).val();
        var isValid = regex.test(memberNick);
        valid.memberNickValid = isValid;
        if(!isValid) {  // 닉네임 형식 위반
            target.removeClass("valid invalid1 invalid2").addClass("invalid1");
            return;
        }
        $.ajax({
            url:"/rest/members/memberNick/" + memberNick,
            method:"get",
            success:function(response) {
                if(response == "Y") {   // 사용할 수 있는 닉네임
                    valid.memberNickValid = true;
                    target.removeClass("valid invalid1 invalid2").addClass("valid");
                }
                else {  // 이미 사용중인 닉네임
                    valid.memberNickValid = false;
                    target.removeClass("valid invalid1 invalid2").addClass("invalid2");
                }
            },
            error:function() {  // 통신 오류
                alert("오류가 발생했습니다.\n나중에 다시 시도해주세요.");
                valid.memberNickValid = false;
            }
        })
    })
    // 이메일 검사
    $("[name=memberEmail]").blur(function() {
        var regex = /.+@.+/;
        var memberEmail = $(this).val();
        var isValid = regex.test(memberEmail);
        valid.memberTelValid = isValid;
        $(this).removeClass("valid invalid1").addClass(isValid ? "valid" : "invalid1");
    })
    // 이름 검사
    // 성
    $("[name=memberLastName]").blur(function() {
        var regex = /^[가-힣]{1,2}$/;
        var memberLastName = $(this).val();
        var isValid = regex.test(memberLastName);
        valid.memberLastNameValid = isValid;
        $(this).removeClass("valid invalid1").addClass(isValid ? "valid" : "invalid1")
    })
    // 이름
    $("[name=memberFirstName]").blur(function() {
        var regex = /^[가-힣]{1,5}$/;
        var memberFirstName = $(this).val();
        var isValid = regex.test(memberFirstName);
        valid.memberFirstNameValid = isValid;
        $(this).removeClass("valid invalid1").addClass(isValid ? "valid" : "invalid1");
    })
    // 전화번호 검사
    $("[name=memberTel]").blur(function() {
        var regex = /^010[1-9][0-9]{7}$/;
        var memberTel = $(this).val();
        var isValid = regex.test(memberTel);
        valid.memberTelValid = isValid;
        $(this).removeClass("valid invalid1").addClass(isValid ? "valid" : "invalid1");
    })
    // 생년월일 검사
    $("[name=memberBirth]").blur(function() {
        var regex = /^(19[0-9]{2}|20[0-9]{2})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|02-(0[1-9]|[12][0-9]))$/;
        var memberBirth = $(this).val();
        var isValid = regex.test(memberBirth);
        valid.memberBirthValid = isValid;
        $(this).removeClass("valid invalid1").addClass(isValid ? "valid" : "invalid1");
    })

    // form 검사
    $(".change-form").submit(function(e) {
        if(valid.isAllValid == false) {
			e.preventDefault();
		}
        return valid.isAllValid();
    })
});