import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const FavoriteButton = ({ id, setRefresh }) => {
  const [favorite, setFavorite] = useState(null);

  const changeFavorite = async () => {
    if (!id) {
      return;
    }

    const response = await fetch(`http://localhost:9000/api/v1/favorites/${id}`, {
      method: !favorite ? 'POST' : 'DELETE',
      body: null,
    });
    if (response.ok) {
      const data = await response.json();
      setFavorite((cur) => (cur ? null : data));
      // Refresh falls wir von der Favorites Seite kommen
      setRefresh && setRefresh(crypto.randomUUID());
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:9000/api/v1/favorites/${id}`);
      if (response.ok) {
        const data = await response.json();
        setFavorite(data);
      }
    }

    fetchData();
  }, [id]);

  return (
    <button
      className=" font-bold bg-transparent border-2 border-yellow-300 rounded-3xl p-[2px] pr-4 text-[1.25rem] text-favoriteFontColor flex items-center"
      onClick={changeFavorite}
    >
      <p className="relative bg-yellow-300 rounded-full w-[35px] h-[35px] text-white text-[3rem] text-center">
        <span className={`absolute top-[-25px] ${favorite ? 'right-2' : 'right-0'}`}>
          {favorite ? '-' : '+'}
        </span>
      </p>
      <span className="ml-6">{favorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.string,
  setRefresh: PropTypes.func,
};

export default FavoriteButton;
