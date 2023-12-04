import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full">
      <img
        className="w-full h-96 object-cover"
        src="https://www.bertelsmann-stiftung.de/fileadmin/files/_processed_/a/c/csm_Fotolia_64336912_X_Original_41023_d2446515ba.jpg"
        alt="header Image"
      />
      <Link to="/admin" className="absolute top-4 right-4 underline font-bold">
        CREATE BLOG
      </Link>
    </header>
  );
};

export default Header;
