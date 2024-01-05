import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container container">
        <div className="footer-box">
          <a href="#" className="logo">
            Pet<span> Heaven Socials</span>
          </a>
          <div className="social">
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <BsTwitter />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#">
              <BsYoutube />
            </a>
          </div>
          <div className="qrcode">
            Scan the QR Code to donate to our charity!
            <br />
            <img src={require("../images/qrcode.png")} alt="qrcode" />
          </div>
        </div>
        <div className="footer-box">
          <h3>Page</h3>
          <a href="#">Home</a>
          <a href="#">Listings</a>
          <a href="#">Adopt</a>
          <a href="#">Release</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-box">
          <h3>Legal</h3>
          <a href="#">Privacy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
        <div className="footer-box">
          <h3>Locations</h3>
          <span>SIM GE</span>
          <span>SUSS</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
