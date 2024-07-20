document.querySelector('.circle-btn').addEventListener('click', () => {
    const innerHalfCircle = document.querySelector('.circle-inner');
    const outerHalfCircle = document.querySelector('.circle-outer');

    leftHalfCircle.style.transform = leftHalfCircle.style.transform === 'rotate(360deg)' ? 'rotate(0deg)' : 'rotate(360deg)';
    rightHalfCircle.style.transform = rightHalfCircle.style.transform === 'rotate(-360deg)' ? 'rotate(0deg)' : 'rotate(-360deg)';
});