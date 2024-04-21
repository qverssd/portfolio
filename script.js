function scrollElement(elementSelector, intstance = 0) {
    const elements = document.querySelector(elementSelector);
    if(elements.length > intstance) {
        elements[intstance].scrollIntoView({behavior: 'smooth'});
    }
}


const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');


link1.addEventListener('click', () => {
    scrollElement('.header');
});

link2.addEventListener('click', () => {
    scrollElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollElement('.column');
});