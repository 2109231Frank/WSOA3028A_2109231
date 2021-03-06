const menuItems = [
    {title: 'HOME', link: '../index.html'},
   
    {title: 'PERSONAL', link: 'Mikes-Personal-Blogs.html'},
    {title: 'INTERACTIVE', link: 'Interactive-Media-Blogs.html'},
    
    {title: 'TEMPLATE', link: 'WireFrame.html'},

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


