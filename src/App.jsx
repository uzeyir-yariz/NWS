import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ListHomeCard from "./components/ListHomeCard";
import ListProjectCard from "./components/ListProjectCard";

// TODO: deadline kısmının tasarımı daha detaylı olmalıdır

function App() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Aylar 0-11 arası olduğu için +1 ekliyoruz

      setTime(`${hours}:${minutes}:${seconds}`);
      setDate(`${day}/${month}`);
    };

    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header className="header position-relative">
        <div className="center d-flex flex-column gap-1 position-absolute">
          <h1 className="display-1">uzeyir-yariz</h1>
          <div className="display-3 fst-italic">{date}</div>
        </div>
        <div className=" bottom-0 horizontal-center  display-2 fw-lighter spe-font">
          {time}
        </div>

        <nav className="d-flex p-1 justify-content-between">
          <p className="w-50 opacity-75">söz ~ yazan kişi</p>

          <ul className="display-6 d-flex gap-4 list-unstyled">
            <li>
              {" "}
              <a
                className="text-light"
                href="https://github.com/yourprofile"
                target="_blank"
              >
                {" "}
                <i className="fa-brands fa-github"></i>{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                className="text-light"
                href="https://www.instagram.com/yourprofile"
                target="_blank"
              >
                {" "}
                <i className="fa-brands fa-instagram"></i>{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                className="text-light"
                href="https://www.youtube.com/yourchannel"
                target="_blank"
              >
                {" "}
                <i className="fa-brands fa-youtube"></i>{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                className="text-light"
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
              >
                {" "}
                <i className="fa-brands fa-linkedin"></i>{" "}
              </a>{" "}
            </li>
          </ul>
        </nav>

        <div className="position-absolute bottom-0 left-0 m-4">deadline</div>
        <a
          target="_blank"
          href="https://wall.alphacoders.com/big.php?i=959309"
          className="link position-absolute bottom-0 right-0 m-4"
        >
          source <i className="fa-solid fa-link"></i>
        </a>
      </header>

      <main>
        <ListHomeCard />

        <ListProjectCard />
      </main>

      <Footer />
    </>
  );
}

export default App;
