import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyCvxOuv5g3zX-61bGHMypPu5k1wlewRpRw",
    authDomain: "linkedin-clone-yt-8886a.firebaseapp.com",
    projectId: "linkedin-clone-yt-8886a",
    storageBucket: "linkedin-clone-yt-8886a.appspot.com",
    messagingSenderId: "1095404081244",
    appId: "1:1095404081244:web:511a0456063473f03e5699"
  };

  
  const  firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth };