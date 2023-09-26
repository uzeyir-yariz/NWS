// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvt9j5NilGWFl2C2Y67uKhuhKCKS_OeeA",
  authDomain: "nws-8b76d.firebaseapp.com",
  projectId: "nws-8b76d",
  storageBucket: "nws-8b76d.appspot.com",
  messagingSenderId: "461109278827",
  appId: "1:461109278827:web:4a03a1fbf5e2b30dc6192e",
  measurementId: "G-2YS02K1RPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore koleksiyon adınızı buraya ekleyin
const collectionName = "products";

// Firestore koleksiyonundan verileri konsola yazdırma işlemi
db.collection(collectionName)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log("Belge ID:", doc.id);
      console.log("Veri:", data);
    });
  })
  .catch((error) => {
    console.error("Veri çekme hatası:", error);
  });