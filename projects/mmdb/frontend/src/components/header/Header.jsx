import { Link } from 'react-router-dom';
import SearchInput from '../main/input/SearchInput';

const Header = () => {
  return (
    <header>
      <section>
        <article className="flex pl-16 gap-12 pr-16 pt-12 text-secondaryFontColor font-bold items-center">
          <Link to="/">
            <h1 className="text-[2rem] font-bold text-secondaryFontColor">MMDB</h1>
          </Link>
          <Link to="/favorites">
            <img src="./images/star.png" alt="star" />
          </Link>
          <div className="flex gap-6 m-auto absolute left-[40%] z-20">
            <SearchInput />
            <button className="bg-secondaryFontColor text-primaryFontColor p-2 pl-6 pr-6 rounded-3xl">
              Submit
            </button>
          </div>
          <Link to="/add" className="ml-auto">
            Add your own
          </Link>
        </article>
      </section>
    </header>
  );
};

export default Header;
