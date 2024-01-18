const btnOne = document.querySelector('.faq-info-content-one');
const cardOneOne = document.querySelector('.faq-info-wrapper-one');
const myImgOne = document.querySelector('.myImgOne');
    

//open-close 1
btnOne.addEventListener('click', ()=>{
    cardOneOne.classList.toggle('content-hidden');
    if(cardOneOne.classList.contains('content-hidden')){
        myImgOne.src = 'img/minus.png';
    } else{
        myImgOne.src = 'img/plus.png';
    }
});

const btnTwo = document.querySelector('.faq-info-content-two');
const cardTwoTwo = document.querySelector('.faq-info-wrapper-two');
const myImgTwo = document.querySelector('.myImgTwo');
    

//open-close 2
btnTwo.addEventListener('click', ()=>{
    cardTwoTwo.classList.toggle('content-hidden');
    if(cardTwoTwo.classList.contains('content-hidden')){
        myImgTwo.src = 'img/minus.png';
    } else{
        myImgTwo.src = 'img/plus.png';
    }
});

const btnThree = document.querySelector('.faq-info-content-three');
const cardThree = document.querySelector('.faq-info-wrapper-three');
const myImgThree = document.querySelector('.myImgThree');
    

//open-close 3
btnThree.addEventListener('click', ()=>{
    cardThree.classList.toggle('content-hidden');
    if(cardThree.classList.contains('content-hidden')){
        myImgThree.src = 'img/minus.png';
    } else{
        myImgThree.src = 'img/plus.png';
    }
});

const btnFour = document.querySelector('.faq-info-content-four');
const cardFour = document.querySelector('.faq-info-wrapper-four');
const myImgFour = document.querySelector('.myImgFour');
    

//open-close 4
btnFour.addEventListener('click', ()=>{
    cardFour.classList.toggle('content-hidden');
    if(cardFour.classList.contains('content-hidden')){
        myImgFour.src = 'img/minus.png';
    } else{
        myImgFour.src = 'img/plus.png';
    }
});

const btnFive = document.querySelector('.faq-info-content-five');
const cardFive = document.querySelector('.faq-info-wrapper-five');
const myImgFive = document.querySelector('.myImgFive');
    

//open-close 5
btnFive.addEventListener('click', ()=>{
    cardFive.classList.toggle('content-hidden');
    if(cardFive.classList.contains('content-hidden')){
        myImgFive.src = 'img/minus.png';
    } else{
        myImgFive.src = 'img/plus.png';
    }
});

const btnSix = document.querySelector('.faq-info-content-six');
const cardSix = document.querySelector('.faq-info-wrapper-six');
const myImgSix = document.querySelector('.myImgSix');
    

//open-close 6
btnSix.addEventListener('click', ()=>{
    cardSix.classList.toggle('content-hidden');
    if(cardSix.classList.contains('content-hidden')){
        myImgSix.src = 'img/minus.png';
    } else{
        myImgSix.src = 'img/plus.png';
    }
});

const btnSeven = document.querySelector('.faq-info-content-seven');
const cardSeven = document.querySelector('.faq-info-wrapper-seven');
const myImgSeven = document.querySelector('.myImgSeven');
    

//open-close 7
btnSeven.addEventListener('click', ()=>{
    cardSeven.classList.toggle('content-hidden');
    if(cardSeven.classList.contains('content-hidden')){
        myImgSeven.src = 'img/minus.png';
    } else{
        myImgSeven.src = 'img/plus.png';
    }
});

const btnEight = document.querySelector('.faq-info-content-eight');
const cardEight = document.querySelector('.faq-info-wrapper-eight');
const myImgEight = document.querySelector('.myImgEight');
    

//open-close 8
btnEight.addEventListener('click', ()=>{
    cardEight.classList.toggle('content-hidden');
    if(cardEight.classList.contains('content-hidden')){
        myImgEight.src = 'img/minus.png';
    } else{
        myImgEight.src = 'img/plus.png';
    }
});

const sliderImages = document.querySelectorAll('.clients-slider-line-wrapper');
const sliderLine = document.querySelector('.clients-slider-line');
const sliderDots = document.querySelectorAll('.clients-slider-dot');

let sliderCount = 0,
    sliderWidth;

window.addEventListener('resize', showSlide);

function showSlide() {
    sliderWidth = document.querySelector('.clients-slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

function nextSide(){
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}

function prevSide(){
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    thisSlide(sliderCount);
}

function rollSlider(){
    sliderLine.style.transform =`translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(index){
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', ()=> {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})  


