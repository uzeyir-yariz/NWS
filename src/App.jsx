import { useEffect, useState } from "react";
import Header from "./components/Header"; // Uygulamanın başlık bileşeni
import MainContent from "./components/MainContent"; // Ana içeriği yöneten bileşen
import Footer from "./components/Footer"; // Alt bilgi bileşeni
import { Sozler } from "./data/Sozler"; // Sözlerin bulunduğu veri kaynağı

function App() {
  // Zaman ve tarih için state değişkenleri
  const [time, setTime] = useState(""); // Saat bilgisini saklamak için
  const [date, setDate] = useState(""); // Tarih bilgisini saklamak için

  // Rastgele bir sözü saklamak için state
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    // Zaman ve tarihi güncelleyen fonksiyon
    const updateDateTime = () => {
      const now = new Date(); // Şu anki tarihi ve saati alır
      const hours = String(now.getHours()).padStart(2, "0"); // Saat bilgisini iki basamaklı hale getirir
      const minutes = String(now.getMinutes()).padStart(2, "0"); // Dakika bilgisini iki basamaklı hale getirir
      const seconds = String(now.getSeconds()).padStart(2, "0"); // Saniye bilgisini iki basamaklı hale getirir
      const day = String(now.getDate()).padStart(2, "0"); // Gün bilgisini iki basamaklı hale getirir
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Ay bilgisini iki basamaklı hale getirir (+1, çünkü aylar 0-11 arasıdır)

      setTime(`${hours}:${minutes}:${seconds}`); // Zaman bilgisini state'e kaydeder
      setDate(`${day}/${month}`); // Tarih bilgisini state'e kaydeder
    };

    // Rastgele bir sözü seçen fonksiyon
    const getRandomQuote = () => {
      const categories = Object.keys(Sozler.sözler); // Sözlerin kategorilerini alır
      const randomCategory = categories[Math.floor(Math.random() * categories.length)]; // Rastgele bir kategori seçer
      const quotes = Sozler.sözler[randomCategory]; // Seçilen kategorideki sözleri alır
      const randomIndex = Math.floor(Math.random() * quotes.length); // Rastgele bir söz indeksi seçer
      return quotes[randomIndex]; // Seçilen sözü döndürür
    };

    // Uygulama ilk yüklendiğinde rastgele bir sözü seç ve state'e kaydet
    setRandomQuote(getRandomQuote());

    // Zaman ve tarihi her saniye güncellemek için bir interval kur
    const intervalId = setInterval(updateDateTime, 1000);

    // Bileşen unmount olduğunda interval'i temizle
    return () => clearInterval(intervalId);
  }, []); // useEffect sadece bileşen yüklendiğinde çalışır

  return (
    <>
      {/* Header bileşenine tarih, zaman ve rastgele sözü props olarak gönderiyoruz */}
      <Header date={date} time={time} randomQuote={randomQuote} />
      
      {/* Ana içerik bileşeni */}
      <MainContent />
      
      {/* Alt bilgi bileşeni */}
      <Footer />
    </>
  );
}

export default App;
