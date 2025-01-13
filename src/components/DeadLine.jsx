/* eslint-disable react/prop-types */
import { useEffect } from "react";

function DeadLine({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="deadline-overlay">
      <div className="deadline-content">
        <h2>Deadline</h2>
        <p>kodlanmaya devam ediyor</p>

        <a
          onClick={onClose}
          className="display-6 position-absolute top-0 right-0 m-2 text-danger"
        >
          <i className="fa-solid fa-x"></i>
        </a>
      </div>
    </div>
  );
}

export default DeadLine;
