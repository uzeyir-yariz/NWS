const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path'); // path modülünü ekleyin

// Firebase servis hesabı anahtar dosyasının yolu (serviceAccountKey.json dosyasının yolunu doğru şekilde belirttiğinizden emin olun)
const serviceAccount = require('./serviceAccountKey.json');

// Firebase yapılandırma
const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://nws-8b76d.firebaseio.com' // Firebase projenizin URL'si
};

// Firebase başlatma
admin.initializeApp(firebaseConfig);

// Firestore örneği alma
const firestore = admin.firestore();

// Firestore'den verileri çekme
firestore.collection('project').get().then((querySnapshot) => {
  const veriler = [];
  querySnapshot.forEach((doc) => {
    veriler.push(doc.data()); 
  });

  // Verileri JSON formatına dönüştürme
  const jsonData = JSON.stringify(veriler);

  // JSON dosyasının yolunu belirtin (public klasörü içinde)
  const jsonDosyaYolu = path.join(__dirname, 'public', 'database', 'project.json');

  // JSON dosyasına yazma
  fs.writeFile(jsonDosyaYolu, jsonData, (err) => {
    if (err) {
      console.error('JSON dosyasına yazma hatası:', err);
    } else {
      console.log('Veriler başarıyla JSON dosyasına kaydedildi.');
    }
  });
}).catch((error) => {
  console.error('Firestore verileri alınırken bir hata oluştu:', error);
});
