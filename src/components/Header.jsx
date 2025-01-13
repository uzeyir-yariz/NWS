/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "./Navbar";
import TimeDisplay from "./DisplayTime";
import DeadLine from "./DeadLine";

function Header({ date, time, randomQuote }) {
  const [isDeadlineVisible, setIsDeadlineVisible] = useState(false);

  // Deadline görünürlüğünü değiştiren fonksiyon
  const toggleDeadline = () => {
    setIsDeadlineVisible(!isDeadlineVisible);
  };

  return (
    <header className="header position-relative">
      <div className="center d-flex flex-column gap-1 position-absolute">
        <h1 className="display-1">uzeyir-yariz</h1>
        <div className="display-3 fst-italic">{date}</div>
      </div>

      <TimeDisplay time={time} date={date} />

      <Navbar randomQuote={randomQuote} />

      {/* Deadline butonu */}
      <a
        className="link deadline"
        onClick={toggleDeadline}
      >
        Deadline
      </a>

      <a
        target="_blank"
        href="https://wall.alphacoders.com/big.php?i=959309"
        className="link source"
        rel="noreferrer"
      >
        source <i className="fa-solid fa-link"></i>
      </a>

      {/* Deadline tam ekran görünümü */}
      {isDeadlineVisible && <DeadLine onClose={toggleDeadline} />}
    </header>
  );
}

export default Header;
