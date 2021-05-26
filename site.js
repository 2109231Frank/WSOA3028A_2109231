
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

//Floaty square animation.
function squeare_spawn(){
    const section = document.querySelector('section');
    const square = document.createElement('span');

    var size = Math.random()*50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    section.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 5000)
}

setInterval(squeare_spawn, 150)
