import "../sass/main.scss";
import logo from "../assets/img/footer-logo.svg";
import PropTypes from "prop-types";

function Footer({ copyrightText, logoSrc }) {
  return (
    <footer>
      <div className="footer">
        <img src={logoSrc} alt="Logo Kasa" />
        <p className="footer__title">{copyrightText}</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  copyrightText: PropTypes.string,
  logoSrc: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  copyrightText: "© 2020 Kasa. All rights reserved",
  logoSrc: logo,
};

export default Footer;
