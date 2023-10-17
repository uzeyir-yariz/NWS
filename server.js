const express = require('express');
const app = express();
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser'); // Express 4.x sürümünde ekstra bir bağımlılık olarak ekledim.

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
app.use(express.static('admin')); // "public" klasörünüzün adını düzelttim.

// JSON verilerini analiz etmek için body-parser kullanımı
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Ana sayfayı (admin.html) gönder
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/admin/admin.html');
});

// Firestore'dan verileri çek, JSON dosyasına yaz, ve istemcilere verileri gönder
app.get('/data_project', (req, res) => { // "/data_project" yolunu ekledim.
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

const belgeID = '8LU8MdGvNi2gKuQ2Emrs'; // Kendi belirlediğiniz benzersiz ID

app.post('/add_project', (req, res) => {
  const veri = req.body; // İstemciden gelen veri

  // Firestore veya başka bir veritabanına veriyi ekleyin
  // Belgeye kendine özgü bir kimlik (ID) atayın
  firestore.collection('project').doc(belgeID).set(veri)
    .then((docRef) => {
      console.log('Veri Firestore\'a başarılı şekilde eklendi, belge ID: ', docRef.id);
      res.json({ message: 'Veri başarılı şekilde yüklendi' });
    })
    .catch((err) => {
      console.error('Veri eklerken bir hata oluştu: ', err);
      res.status(500).json({ err: 'Veri eklenemedi' });
    });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} portunda çalışıyor.`);
});
