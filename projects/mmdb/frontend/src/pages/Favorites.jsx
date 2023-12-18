import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/main/buttons/FavoriteButton';

const Favorites = () => {
  const [favorites, setFavorites] = useState(null);
  const [refresh, setRefresh] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${import.meta.env.VITE_FETCH_URL}/favorites/`);
      if (response.ok) {
        const data = await response.json();
        setFavorites(data);
      }
    }

    fetchData();
  }, [refresh]);

  return (
    <section className="pl-16 pr-16 pt-16">
      <h2 className="text-[3rem] font-bold text-tertiaryFontColor mb-16">My Favorites</h2>
      <article className="grid grid-cols-3 gap-16 ">
        {favorites && favorites.length > 0 ? (
          favorites.map((f) => {
            return (
              <div key={f._id} className="flex flex-col">
                <Link to={`/details/${f._id}`}>
                  <div className="flex flex-col">
                    <img
                      src={`${
                        f.poster ? f.poster : 'https://wiki.dave.eu/images/4/47/Placeholder.png'
                      }`}
                      alt={f.title}
                    />
                    <p className="text-primaryFontColor">{f.title}</p>
                    <p className="text-secondaryFontColor">{f.director}</p>
                  </div>
                </Link>

                <FavoriteButton id={f._id} setRefresh={setRefresh} />
              </div>
            );
          })
        ) : (
          <article className="h-[80vh] flex justify-center items-center">
            <p className="text-[5rem] font-bold">NO FAVORITES</p>
          </article>
        )}
      </article>
    </section>
  );
};

export default Favorites;
