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
      window.scrollTo(0, 0); // Scrollbarı en üste getir
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
        className="position-absolute bottom-0 horizontal-center time display-1 fw-lighter spe-font"
        onClick={handleClick}
      >
        <a className="link">{time}</a>
      </div>

      {isModalOpen && (
        <div
        onClick={handleClose}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeDisplay;
