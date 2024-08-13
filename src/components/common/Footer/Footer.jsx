import './Footer.scss';
import FacebookIcon from '../../../assets/icons/icon-facebook.svg';
import TwitterIcon from '../../../assets/icons/icon-twitter.svg';
import PinterestIcon from '../../../assets/icons/icon-pinterest.svg';
import InstagramIcon from '../../../assets/icons/icon-instagram.svg';

const Footer = () => {
  return (
    <footer>
      <div className="logo">loopstudios</div>
      <nav>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Events</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">Support</a></li>
        </ul>
      </nav>
      <div className="footer-social">
        <div className="social-icons">
          <img src={FacebookIcon} alt="Facebook" />
          <img src={TwitterIcon} alt="Twitter" />
          <img src={PinterestIcon} alt="Pinterest" />
          <img src={InstagramIcon} alt="Instagram" />
        </div>
      </div>
      <p className="footer-bottom"> &copy; 2023 Loopstudios. All rights reserved.</p>
    </footer>
  )
}

export default Footer;