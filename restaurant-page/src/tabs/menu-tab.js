export default function MenuPage(){
  const Menu = document.createElement('div');

  const header = document.createElement('header'); 
  const h2 = document.createElement('h2'); 
  const nav = document.createElement('nav'); 
  const navLink1 = document.createElement('a'); 
  const navLink2 = document.createElement('a'); 

  const main = document.createElement('main'); 

  Menu.id = 'menu-page';
  h2.innerHTML = 'Menu';
  navLink1.dataset.link = 'home';
  navLink2.dataset.link = 'about';
  navLink1.innerHTML = 'Home';
  navLink2.innerHTML = 'About';
  
  nav.appendChild(navLink1);
  nav.appendChild(navLink2);

  header.appendChild(h2);
  header.appendChild(nav);

  Menu.appendChild(header);
  Menu.appendChild(main);

  document.querySelector('#content').appendChild(Menu);
}


export const removeMenuPage = () => {
  const Page = document.getElementById('menu-page');
  Page.remove();
}
