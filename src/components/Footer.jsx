import "../sass/main.scss";
import logo from "../assets/img/footer-logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src={logo} alt="Logo Kasa" />
        <p className="footer__title">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
