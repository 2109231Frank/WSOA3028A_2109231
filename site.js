
const navSlideIn = () => {
    const threestripe = document.querySelector('.threestripe');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    threestripe.addEventListener('click', () => {

        //Navigation side bar activation.
        nav.classList.toggle('nav-active');

        //Link animation.
        navLinks.forEach((link, index) => {
        
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkAppear 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
                
            });
        
        //Three lines animation.
        threestripe.classList.toggle('toggle');
    });
}

navSlideIn();


