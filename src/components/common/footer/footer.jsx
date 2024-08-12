// import FacebookIcon from '../../../assets/icons/icon-facebook.svg';
// import TwitterIcon from '../../../assets/icons/icon-twitter.svg';
// import PinterestIcon from '../../../assets/icons/icon-pinterest.svg';
// import InstagramIcon from '../../../assets/icons/icon-Instagram.svg';
/*import './Footer.scss';*/

const Footer = () => {
  return (

      <Footer>
        <div className="logo">loopstudios</div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </nav>
        <div className="footer-social">
            <div className="social-icons">
              {/* <img src={FacebookIcon} alt="Facebook" />
              <img src={TwitterIcon} alt="Twitter" />
              <img src={PinterestIcon} alt="Pinterest" />
              <img src={InstagramIcon} alt="Instagram" /> */}
            </div>
          </div>
        <p className="footer-bottom"> &copy; 2023 Loopstudios. All rights reserved.</p>
      </Footer>

  );
};

export default Footer;