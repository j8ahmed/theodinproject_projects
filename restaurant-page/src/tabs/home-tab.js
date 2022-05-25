export default function HomePage(){
  const Home = document.createElement('div');

  const header = document.createElement('header'); 
  const h2 = document.createElement('h2'); 
  const nav = document.createElement('nav'); 
  const navLink1 = document.createElement('a'); 
  const navLink2 = document.createElement('a'); 

  const main = document.createElement('main'); 
  const h1 = document.createElement('h1'); 

  Home.id = 'home-page';
  h2.innerHTML = 'My Restaurant';
  h1.innerHTML = 'Restaurant Page';
  navLink1.dataset.link = 'about';
  navLink2.dataset.link = 'menu';
  navLink1.innerHTML = 'About';
  navLink2.innerHTML = 'Menu';
  
  nav.appendChild(navLink1);
  nav.appendChild(navLink2);

  header.appendChild(h2);
  header.appendChild(nav);

  main.appendChild(h1);
  main.appendChild(nav.cloneNode(true));
  
  Home.appendChild(header);
  Home.appendChild(main);

  document.querySelector('#content').appendChild(Home);

}

export const removeHomePage = () => {
  const Page = document.getElementById('home-page');
  Page.remove();
}
