const choseColor = document.querySelectorAll('.choose__color-btn');
const contentItem = document.querySelectorAll('.content-item');

choseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt){
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    choseColor.forEach(function(item){
        item.classList.remove('choose__color-btn--active');
    })
    target.classList.add('choose__color-btn--active');

    contentItem.forEach(function(item){
        item.classList.remove('content-item__active');
    });

    contentActive.forEach(function(item){
        item.classList.add('content-item__active')
    });

}
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.title--air').classList.add('show');
        document.querySelector('.title--pod').classList.add('show');
        document.querySelector('.title--s').classList.add('show');
        document.querySelector('.title--m').classList.add('show');
        document.querySelector('.title--ax').classList.add('show');
        document.querySelector('.header__content-title').classList.add('show');
    }, 1000); // Час затримки в мілісекундах (1000 мілісекунд = 1 секунда)
    setTimeout(function() {
        document.querySelector('.header__nav').classList.add('show')
        document.querySelectorAll('.header__content-images img').forEach(function(img) {
            img.classList.add('show');
        });
    }, 500);
});