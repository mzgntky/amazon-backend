const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBh0MmS3FfZz_fo1NQLzdDhteLIByq5MQQ",
  authDomain: "clone-1d8db.firebaseapp.com",
  projectId: "clone-1d8db",
  storageBucket: "clone-1d8db.appspot.com",
  messagingSenderId: "772637665132",
  appId: "1:772637665132:web:69b1ae61991ebd8017f549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


module.exports = { db };