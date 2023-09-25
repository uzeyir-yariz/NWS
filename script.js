const fetch = require('node-fetch');

const firebaseConfig = {
    apiKey: "AIzaSyCvt9j5NilGWFl2C2Y67uKhuhKCKS_OeeA",
    authDomain: "nws-8b76d.firebaseapp.com",
    projectId: "nws-8b76d",
    storageBucket: "nws-8b76d.appspot.com",
    messagingSenderId: "461109278827",
    appId: "1:461109278827:web:4a03a1fbf5e2b30dc6192e",
    measurementId: "G-2YS02K1RPB"
  };

const collectionName = 'your-collection-name'; // Koleksiyon adını buraya ekleyin
const apiKey = firebaseConfig.apiKey;

const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/(default)/documents/${collectionName}?key=${apiKey}`;

fetch(firestoreUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((error) => {
    console.error('Veriler alınamadı:', error);
  });
