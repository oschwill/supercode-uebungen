/* IMAGES */
import logo from '../assets/images/header_logo.svg';
import moonImage from '../assets/images/moon.svg';

const header_logo = () => {
  return (
    <header>
      <nav className="m-8 mx-10 flex justify-between items-start ">
        <img src={logo} alt="logo" />
        <div className="flex flex-col md:flex-row md:gap-4 lg:gap-20">
          <a href="#" className="hov hover:border-solid hover:border-y-2 hover:border-current">
            MAIN
          </a>
          <a href="#" className="hov hover:border-solid hover:border-y-2 hover:border-current">
            GALLERY
          </a>
          <a href="#" className="hov hover:border-solid hover:border-y-2 hover:border-current">
            PROJECTS
          </a>
          <a href="#" className="hov hover:border-solid hover:border-y-2 hover:border-current">
            CERTIFICATIONS
          </a>
          <a href="#" className="hov hover:border-solid hover:border-y-2 hover:border-current">
            CONTACTS
          </a>
          <img src={moonImage} alt="logo" className="order-first w-7 self-end md:order-last" />
        </div>
      </nav>
    </header>
  );
};

export default header_logo;
