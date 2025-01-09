/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TimeDisplay = ({ time, date }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div>
      <div
        className="bottom-0 horizontal-center display-2 fw-lighter spe-font"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        {time}
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
          onClick={handleClose}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "4rem", // Fontu daha büyük yap
            }}
          >
            <h1
              style={{ fontSize: "8rem" }}
              className="display-1 fw-lighter spe-font"
            >
              {time}
            </h1>
            <h1
              style={{ fontSize: "4rem" }}
              className="display-1 fw-lighter spe-font"
            >
              {date}
            </h1>

            <span
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "2%",
                right: "2%",
                cursor: "pointer",
                fontSize: "2rem", // Buton fontunu da büyüt
              }}
            >
              <i className="fa-solid fa-x"></i>
            </span>

            <div
              className="hover-expand"
              style={{
                position: "absolute",
                top: "2%",
                left: "2%",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "2rem", // Buton fontunu da büyüt
              }}
            >
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
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeDisplay;
