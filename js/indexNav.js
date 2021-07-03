
const menuItems = [
   
   
    {title: 'PERSONAL', link: 'Pages/Mikes-Personal-Blogs.html'},
    {title: 'INTERACTIVE', link: 'Pages/Interactive-Media-Blogs.html'},
    
    {title: 'TEMPLATE', link: 'Pages/WireFrame.html'},

]

const initialiseMenu = () => {

const nav = document.querySelector('nav');

const ul = document.createElement('ul');

for(let item of menuItems) {
    const li = document.createElement('li');
    const a = document.createElement('a');
        a.innerText = item.title;
        a.href = item.link;
            li.appendChild(a);

        ul.appendChild(li);
}

    nav.appendChild(ul);
};

document.addEventListener('DOMContentLoaded', () => initialiseMenu());


//Mobile and tablet navbar animation
const navigationAnimation = () => 
{
    const threestripe = document.querySelector('.threestripe');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('nav li');


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