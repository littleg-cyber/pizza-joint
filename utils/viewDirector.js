import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/Buttons/loginButton';
// import logoutButton from '../components/Buttons/logoutButton';
import firebaseConfig from '../api/apiKeys';
import startApp from './startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;
