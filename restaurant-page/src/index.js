import style from './style'
import HomePage, {removeHomePage} from './tabs/home-tab'
import AboutPage, {removeAboutPage} from './tabs/about-tab'
import MenuPage, {removeMenuPage} from './tabs/menu-tab'

const tabs = {
  home: {pageName: 'home', addPage: HomePage, removePage: removeHomePage},
  menu: {pageName: 'menu', addPage: MenuPage, removePage: removeMenuPage},
  about: {pageName: 'about', addPage: AboutPage, removePage: removeAboutPage},
}

const pageState = {
  currentPage: tabs.home.pageName,
}

const addLinks = () => {
  const navLinks = document.querySelectorAll('[data-link]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      // Remove the current page
      tabs[pageState.currentPage].removePage();

      // Add the selected page
      const newPage = e.target.dataset.link;
      updateDisplay(newPage);
    })
  });

}

const updateDisplay = (display = tabs.home.pageName) => {
  const newPage = tabs[display];
  pageState.currentPage = display;
  newPage.addPage();
  addLinks();
}


(function init(){
  HomePage();
  addLinks();
})();






