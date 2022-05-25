export default function AboutPage(){
  const About = document.createElement('div');

  const header = document.createElement('header'); 
  const h2 = document.createElement('h2'); 
  const nav = document.createElement('nav'); 
  const navLink1 = document.createElement('a'); 
  const navLink2 = document.createElement('a'); 
  const p = document.createElement('p');

  const main = document.createElement('main'); 

  About.id = 'about-page';
  h2.innerHTML = 'About';
  navLink1.dataset.link = 'home';
  navLink2.dataset.link = 'menu';
  navLink1.innerHTML = 'Home';
  navLink2.innerHTML = 'Menu';
  p.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
  
  nav.appendChild(navLink1);
  nav.appendChild(navLink2);

  header.appendChild(h2);
  header.appendChild(nav);

  main.appendChild(p);
  main.appendChild(p.cloneNode(true));
  main.appendChild(p.cloneNode(true));
  
  About.appendChild(header);
  About.appendChild(main);

  document.querySelector('#content').appendChild(About);
}


export const removeAboutPage = () => {
  const Page = document.getElementById('about-page');
  Page.remove();
}
