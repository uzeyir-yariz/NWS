/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TimeDisplay = ({ time, date }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Scrollbarı en üste getir
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const currentDay = new Date().toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
  });

  const nextDay = new Date(Date.now() + 86400000).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
  });

  const calculateProgress = () => {
    const now = new Date(); // Şu anki zaman
    const startOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    ); // Bugünün 00:00'ı
    const endOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    ); // Yarın 00:00'ı

    const totalTime = endOfDay - startOfDay; // Günün toplam süresi (ms)
    const elapsedTime = now - startOfDay; // Şimdiye kadar geçen süre (ms)

    const percentage = ((elapsedTime / totalTime) * 100).toFixed(2); // Yüzde hesapla
    return Math.max(0, Math.min(percentage, 100)); // %0 ile %100 arasında tut
  };

  useEffect(() => {
    // Progress'i sürekli güncelle
    const interval = setInterval(() => {
      setProgress(calculateProgress());
    }, 1000); // Her saniye güncelle
    return () => clearInterval(interval); // Temizle
  }, []);

  return (
    <div>
      <div
        className="position-absolute bottom-0 horizontal-center time display-1 fw-lighter spe-font"
        onClick={handleClick}
      >
        <a className="link">{time}</a>
      </div>

      {isModalOpen && (
        <div
          className="modal"
          style={{
            position: "fixed",
            overflow: "hidden",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            color: "white",
          }}
        >
          <div>
            <h1 className="display-1 text-center fw-lighter spe-font">
              {time}
            </h1>

            <h1 className="display-1 text-center fw-lighter spe-font">
              {date}
            </h1>

            <a
              onClick={handleClose}
              className="display-6 position-absolute top-0 right-0 m-2 text-danger"
            >
              <i className="fa-solid fa-x"></i>
            </a>

            <div className="hover-expand position-absolute top-0 left-0 m-2">
              <pre>
                bir saat <span className="highlight">60 dakika</span>
                <br />
                bir gün <span className="highlight">1.440 dakika</span>
                <br />
                bir hafta <span className="highlight">10.080 dakika</span>
                <br />
                bir ay <span className="highlight">43.829 dakika</span>
                <br />
                bir yıl <span className="highlight">525.948.766 dakika</span>
              </pre>
            </div>

            <div
              style={{ width: "70vw" }}
              className="d-flex progressbar-time horizontal-center align-items-center bottom-0 display-6 "
            >
              <p className="w-50">{currentDay}</p>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  height: "20px",
                  margin: "20px auto",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    background: `green`,
                    height: "100%",
                    transition: "width 0.5s ease",
                  }}
                ></div>
              </div>
              <p className="w-50 text-end">{nextDay}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeDisplay;
