
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


