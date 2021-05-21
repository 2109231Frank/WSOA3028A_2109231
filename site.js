const navSlideIn = () => {
    const threestripe = document.querySelector('.threestripe');
    const nav = document.querySelector('.nav-links');

    threestripe.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}
navSlideIn();