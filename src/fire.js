import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANOPawhpCtnzj3yUDoE8q15VESx13G2y8",
  authDomain: "final-project-68fea.firebaseapp.com",
  projectId: "final-project-68fea",
  storageBucket: "final-project-68fea.appspot.com",
  messagingSenderId: "641868854312",
  appId: "1:641868854312:web:2599e4ab6f7e90dfa4b11d"
};

  const fire = firebase.initializeApp(firebaseConfig);


  export default fire; 