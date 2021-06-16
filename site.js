//Smooth scrolling
function smoothScroll(target, duration)
{
    var target = document.querySelector(target);
    var targetPos = target.getBoundingClientRect().top;
    var startPos = window.pageYOffset;
    var distanceBetween = targetPos - startPos;
    var startTime = null;

    function scrollAnim(currentTime)
    {
        if(startTime === null) startTime = currentTime;
            var timeEllapsed = currentTime - startTime;
            var runAnim = animationEase(timeEllapsed, startPos, distanceBetween, duration);
                window.scrollTo(0, runAnim);
                    if(timeEllapsed < duration) requestAnimationFrame(scrollAnim);
    }

    /*function animationEase(t, b, c, d)
    {
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;  
        
    }*/

        requestAnimationFrame(scrollAnim);
}
    //link to contact
        var Tosection6 = document.querySelector('.section6Link');
        Tosection6.addEventListener('click', function(){
            smoothScroll('.section6', 1000);
        });
    //link to work
        var Tosection5 = document.querySelector('.section5Link');
        Tosection5.addEventListener('click', function(){
            smoothScroll('.section5', 1000);
        });
    //link to blogs
        var Tosection4 = document.querySelector('.section4Link');
        Tosection4.addEventListener('click', function(){
            smoothScroll('.section4', 1000);
        });
    //link to personal
        var Tosection3 = document.querySelector('.section3Link');
        Tosection3.addEventListener('click', function(){
            smoothScroll('.section3', 1000);
        });
    //link to projects
        var Tosection2 = document.querySelector('.section2Link');
        Tosection2.addEventListener('click', function(){
            smoothScroll('.section2', 1000);
        });
    //link to about
        var Tosection1 = document.querySelector('.section1Link');
        Tosection1.addEventListener('click', function(){
            smoothScroll('.section1', 1000);
        });



//Mobile and tablet navbar animation
const navigationAnimation = () => 
{
    const threestripe = document.querySelector('.threestripe');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

        threestripe.addEventListener('click', () => 
        {
            nav.classList.toggle('navigationAnim');

            navLinks.forEach((link, index) => 
            {
                if(link.style.animation)
                {
                    link.style.animation = '';
                }
                else
                {
                    link.style.animation = `nav-linkAnim 0.7s ease forwards ${index/ 7 + 0.5}s`;
                }
            });
        });
}
navigationAnimation();
