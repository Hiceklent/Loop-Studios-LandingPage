import './Footer.scss';
import FacebookIcon from '../../../assets/icons/icon-facebook.svg';
import TwitterIcon from '../../../assets/icons/icon-twitter.svg';
import PinterestIcon from '../../../assets/icons/icon-pinterest.svg';
import InstagramIcon from '../../../assets/icons/icon-Instagram.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
      <div className="logo">loopstudios</div>
      <nav className="footer-nav">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </nav>
      </div>
      <div className="footer-right">
        <ul className="social-icons">
          <li><a href="#"><img src={FacebookIcon} alt="Facebook" /></a></li>
          <li><a href="#"><img src={TwitterIcon} alt="Twitter" /></a></li>
          <li><a href="#"><img src={PinterestIcon} alt="Pinterest" /></a></li>
          <li><a href="#"><img src={InstagramIcon} alt="Instagram" /></a></li>
        </ul>
        <p className="footer-bottom"> &copy; 2023 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;