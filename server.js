const express = require('express');
const app = express();
const port = 3000;
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

// Verileri al, JSON dosyasına yaz, ve istemcilere verileri gönder
app.get('/data_project', (req, res) => {
  firestore.collection('project').get()
    .then((querySnapshot) => {
      const veriler = [];
      querySnapshot.forEach((doc) => {
        veriler.push(doc.data());
      });
      const jsonData = JSON.stringify(veriler);
      const jsonDosyaYolu = path.join(__dirname, 'public', 'database', 'project.json');
      fs.writeFile(jsonDosyaYolu, jsonData, (err) => {
        if (err) {
          console.error('JSON dosyasına yazma hatası:', err);
          res.status(500).json({ error: 'Veriler yazılamadı' });
        } else {
          console.log('Veriler başarıyla JSON dosyasına kaydedildi.');
          res.json({ message: 'Veriler başarıyla kaydedildi' });
        }
      });
    })
    .catch((error) => {
      console.error('Firestore verileri alınırken bir hata oluştu:', error);
      res.status(500).json({ error: 'Veriler alınamadı' });
    });
});

app.use(express.static('admin'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/admin/admin.html');
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} portunda çalışıyor.`);
});
