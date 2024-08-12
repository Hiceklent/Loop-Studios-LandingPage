import './Header.scss'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">loopstudios</div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="#FFF">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
