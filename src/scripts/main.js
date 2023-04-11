// USE WITH FIREBASE AUTH
import checkLoginStatus from '../../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import loginButton from '../../components/Buttons/loginButton';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <div style="text-align:center">
  <h1>Hip Hop, Pizza, and Wangs</h1>
  <p style="background-image: url('');">
  <image src="https://github.com/NSS-Evening-E22/pos-system-top-tune/raw/main/instructions/hhpw-record.png" style="height:300px;"></image></div>`;

  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
loginButton();
