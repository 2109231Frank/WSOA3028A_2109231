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

    function animationEase(t, b, c, d)
    {
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;  
        
    }
    console.log(targetPos);
    console.log(startPos);
    console.log(distanceBetween);
        requestAnimationFrame(scrollAnim);

            
}
    //link to top
    var ToTop = document.querySelector('.toTop');
        ToTop.addEventListener('click', () => {
            smoothScroll('.section1', 1000);
        });
    //link to contact
        var Tosection6 = document.querySelector('.section6Link');
        Tosection6.addEventListener('click', () => {
            smoothScroll('.section6', 1000);
                
        });
    //link to work
        var Tosection5 = document.querySelector('.section5Link');
        Tosection5.addEventListener('click', () => {
            smoothScroll('.section5', 1000);
        });
    //link to blogs
        var Tosection4 = document.querySelector('.section4Link');
        Tosection4.addEventListener('click', () => {
            smoothScroll('.section4', 1000);
        });
    //link to personal
        var Tosection3 = document.querySelector('.section3Link');
        Tosection3.addEventListener('click', () => {
            smoothScroll('.section3', 1000);
        });
    //link to projects
        var Tosection2 = document.querySelector('.section2Link');
        Tosection2.addEventListener('click', () => {
            smoothScroll('.section2', 1000);
        });
    //link to about
        var Tosection1 = document.querySelector('.section1Link');
        Tosection1.addEventListener('click', () => {
            smoothScroll('.section1', 1000);
        });