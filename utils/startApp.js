import logoutButton from '../components/Buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import addItemFormEvents from '../events/addItemFormEvents';
import addOrderFormEvents from '../events/addOrderFormEvents';
import homePage from '../pages/homePage';
import domEvents from '../events/domEvents';
import closeOrderFormEvents from '../events/closedFormEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder();
  homePage(user);
  navBar();
  navEvents();
  domEvents();
  closeOrderFormEvents();
  addItemFormEvents();
  addOrderFormEvents();
  logoutButton();
};

export default startApp;
