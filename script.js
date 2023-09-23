const firebase = require("firebase/app");
require("firebase/firestore");
const fs = require("fs");

// Firebase projenizin yapılandırma bilgilerini buraya ekleyin
const firebaseConfig = {
    apiKey: "AIzaSyCvt9j5NilGWFl2C2Y67uKhuhKCKS_OeeA",
    authDomain: "nws-8b76d.firebaseapp.com",
    projectId: "nws-8b76d",
    storageBucket: "nws-8b76d.appspot.com",
    messagingSenderId: "461109278827",
    appId: "1:461109278827:web:4a03a1fbf5e2b30dc6192e",
    measurementId: "G-2YS02K1RPB"
};
// Firestore referansını alın
const db = firebase.initializeApp(firebaseConfig).firestore();

// Firestore'dan verileri alın
const collectionName = "products"; // Koleksiyon adını buraya ekleyin

const getData = async () => {
  try {
    const snapshot = await db.collection(collectionName).get();
    const data = [];

    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    // Firestore verilerini JSON formatına dönüştürün
    const jsonData = JSON.stringify(data, null, 2);

    // JSON verilerini bir dosyaya yazın
    fs.writeFileSync("data.json", jsonData, "utf-8");
    console.log("Veriler JSON dosyasına kaydedildi.");
  } catch (error) {
    console.error("Veriler alınamadı: ", error);
  } finally {
    // Firebase bağlantısını kapatın
    firebase.app().delete();
  }
};

getData();
