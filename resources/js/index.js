const list = document.querySelectorAll('.header-bottom ul li');
const indicator = document.querySelector('.indicator');

function changeIndicator(target){
    indicator.style.left = target.offsetLeft + 'px';
    indicator.style.width = target.offsetWidth + 'px';
}

list.forEach((item) => {
    item.addEventListener('click', (event)=>{
        changeIndicator(event.target)
    });
});

// const likebt = document.querySelector('.like svg');
// console.log(likebt);