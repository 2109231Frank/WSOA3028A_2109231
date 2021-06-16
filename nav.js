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