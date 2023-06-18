const contactmodal = document.querySelector(".contactmodal");
    const conbtn = document.querySelector(".contactBtn");
    const $conspan = document.querySelector(".contact-close");
    

    conbtn.addEventListener('click', openContactModal);
    $conspan.addEventListener('click', closeContactModal);

    function openContactModal() {
        contactmodal.style.display = "block";
        contactmodal.animate([{opacity: 0}, {opacity: 1}], {duration: 300, fill: "forwards"});
    }

    function closeContactModal() {
        contactmodal.animate([{opacity: 1}, {opacity: 0}], {duration: 300, fill: "forwards"}).onfinish = function() {
        contactmodal.style.display = "none";
        const $img = document.querySelector(".contact-imgdiv");
            if($img.hasChildNodes()){
                $img.replaceChildren();
            }
        };
    }
    function contactreadURL(obj) {
            
        let reader = new FileReader();
        if(!obj.files.length) {
            return;
        }
        reader.readAsDataURL(obj.files[0]);
        reader.onload = function (e) {
            let $div = $('<div>');
            $($div).css('width','120px');
            $($div).css('height','120px');
            $($div).css('padding','10px 10px 0px 0px');

            $('.contact-imgdiv').append($div);

            let img = $('<img />');                
            $(img).attr('src', e.target.result);
            $(img).css('width','100%');
            $(img).css('height','100%');
            $($div).append(img);
        }
    }

const review = document.querySelector(".reviewmodal");
    const btn = document.querySelector(".reviewBtn");
    const reviewClose = document.querySelector(".review-close");
    

    btn.addEventListener('click', openReviewModal);
    reviewClose.addEventListener('click', closeReviewModal);

    function openReviewModal() {
        review.style.display = "block";
        review.animate([{opacity: 0}, {opacity: 1}], {duration: 300, fill: "forwards"});
    }

    function closeReviewModal() {
        review.animate([{opacity: 1}, {opacity: 0}], {duration: 300, fill: "forwards"}).onfinish = function() {
            review.style.display = "none";
            const $img = document.querySelector(".previewDiv");
            if($img.hasChildNodes()){
                $img.replaceChildren();
            }
        };
    }
    function ReviewreadURL(obj) {
                
        let reader = new FileReader();
        if(!obj.files.length) {
            return;
        }
        reader.readAsDataURL(obj.files[0]);
        reader.onload = function (e) {
            let $div = $('<div>');
            $($div).css('width','120px');
            $($div).css('height','120px');
            $($div).css('padding','10px 10px 0px 0px');

            $('.reviewDiv').append($div);

            let img = $('<img />');                
            $(img).attr('src', e.target.result);
            $(img).css('width','100%');
            $(img).css('height','100%');
            $($div).append(img);
        }
    }


