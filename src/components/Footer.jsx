const Footer = () => {
  return (
    <footer className="footer mt-5" role="contentinfo">
      <div
        className="social"
        role="navigation"
        aria-labelledby="social-heading"
      >
        <h3 id="social-heading" className="sr-only">
          Sosyal medyadan takip edin
        </h3>
        <a
          target="_blank"
          href="https://x.com/uzeyir_yariz"
          aria-label="Twitter"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/uzeyiryariz/"
          aria-label="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          target="_blank"
          href="https://github.com/uzeyir-yariz"
          aria-label="Github"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      <hr className="footer-break" />

      <p className="copyright">© 2024 uzeyir-yariz</p>
    </footer>
  );
};

export default Footer;
