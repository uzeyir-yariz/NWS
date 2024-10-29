const Footer = () => {
  return (
    <footer className="footer mt-5" role="contentinfo">
        <div className="social" role="navigation" aria-labelledby="social-heading">
            <h3 id="social-heading" className="sr-only">Sosyal medyadan takip edin</h3>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="Github"><i className="fa-brands fa-github"></i></a>
        </div>

        <hr className="footer-break"/>
        
        <ul className="footer-links" role="navigation" aria-labelledby="footer-links-heading">
            <h3 id="footer-links-heading" className="sr-only">Footer Links</h3>
            <li><a href="/">Ana sayfa</a></li>
            <li><a href="extra/projects">Projeler</a></li>
            <li><a href="extra/games">Oyunlar</a></li>
            <li><a href="/about">Hakkımızda</a></li>
            <li><a href="extra/hub">Developer Hub</a></li>
            <li><a href="/contact">İletişim</a></li>
        </ul>
        <p className="copyright">© 2024 uzeyir-yariz</p>
    </footer>
  );
};

export default Footer;
