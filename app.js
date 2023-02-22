function sliderFunction() {
    const data = [
        'test1',
        'test2',
        'test3',
        'test4',
        'test5'
    ];
    const color = ['#CC0000', '#FF6600', '#FF3366', '#9933CC', '#003333', '#708090'];
    let count = 0;
    let allSlides;

    document.querySelector('.btn-start').addEventListener('click', function(event) {
        event.stopPropagation();
        this.classList.add('hide');
        home();
    });

    function home() {
        const body = document.querySelector('body');
        for(let i = 0; i < data.length; i++) {
            let div = document.createElement('div');
            div.classList.add('slide');
            if (i !== 0) div.classList.add('hide');
            if (i === 0) div.style.background = color[randomColor(0, color.length - 1)];
            let text = document.createElement('div');
            text.textContent = data[i];
            div.append(text);
            body.append(div);
        }
        body.addEventListener('click',function(event) {
            hideSingleSlide(count);
            if (count + 1 < data.length) {
                count++;
            }
            else {
                count = 0;
            }
            showSingleSlide(count);
        });
        allSlides = document.querySelectorAll('.slide');
    }
    function randomColor(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    
    function showSingleSlide(n) {
        allSlides[n].classList.remove('hide');
        allSlides[n].style.background = color[randomColor(0, color.length - 1)];
    }
    function hideSingleSlide(n) {
        allSlides[n].classList.add('hide');
    }
}
document.addEventListener("DOMContentLoaded", sliderFunction);
