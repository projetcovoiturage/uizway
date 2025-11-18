const wrapper = document.querySelector('.cards-wrapper');
const btnRight = document.getElementById('btn-right');
const btnLeft = document.getElementById('btn-left');

btnRight.addEventListener('click', () => {
    wrapper.scrollBy({ left: 220, behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
    wrapper.scrollBy({ left: -220, behavior: 'smooth' });
});



