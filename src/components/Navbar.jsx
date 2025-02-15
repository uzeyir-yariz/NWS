/* eslint-disable react/prop-types */
function Navbar({ randomQuote }) {
  return (
    <nav className="d-flex p-1 justify-content-between">
      <p className="w-50 opacity-75">
        {randomQuote ? (
          <>
            <span>{randomQuote.yazı}</span> ~
            <strong className="highlight"> {randomQuote.yazar}</strong>
          </>
        ) : (
          "Sözler yükleniyor..."
        )}
      </p>

      <ul className="display-6 d-flex gap-4 list-unstyled">
        <li>
          <a
            className="text-light"
            href="https://github.com/uzeyir-yariz"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            className="text-light"
            href="https://www.instagram.com/uzeyiryariz/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            className="text-light"
            href="https://www.youtube.com/@uzeyiryariz3169"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a
            className="text-light"
            href="https://www.linkedin.com/in/%C3%BCzeyir-yariz-aa2722259/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
