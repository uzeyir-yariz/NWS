const express = require('express');
const app = express();
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Firebase servis hesabı anahtar dosyasının yolu
const serviceAccount = require('./serviceAccountKey.json');

// Firebase yapılandırma
const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://nws-8b76d.firebaseio.com'
};

// Firebase başlatma
admin.initializeApp(firebaseConfig);

// Firestore örneği alma
const firestore = admin.firestore();

// Sunucu kök dizinindeki "public" klasörünü istemcilere sun
app.use(express.static('public'));

// Ana sayfayı (admin.html) gönder
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/admin/admin.html');
});

// Firestore'dan verileri çek, JSON dosyasına yaz, ve istemcilere verileri gönder
app.get('/data_project', (req, res) => {
    firestore.collection('project').get()
        .then((querySnapshot) => {
          const veriler = [];
          querySnapshot.forEach((doc) => {
            veriler.push(doc.data());
          });
          res.json({ veriler: veriler }); // Verileri bir obje içinde gönderiyoruz
        })
        .catch((error) => {
          console.error('Firestore verileri alınırken bir hata oluştu:', error);
          res.status(500).json({ error: 'Veriler alınamadı' });
        });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} portunda çalışıyor.`);
});
