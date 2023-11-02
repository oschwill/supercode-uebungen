import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MovieDataContext } from '../Context/Context';
import CountStars from '../components/filter/output/CountStars';

const MovieDetail = () => {
  const index = useParams();

  const movieData = useContext(MovieDataContext);

  const detailData = movieData[index.id];

  return (
    <main>
      <section>
        {detailData && (
          <article className="flex flex-col items-center pt-10 text-white bg-movieBoxBg h-screen">
            <div className="flex flex-col gap-4 text-center">
              <p className="text-9xl pb-6">{detailData.title}</p>
              <p className="text-2xl">{detailData.year}</p>
              <p className="text-2xl pb-6">{detailData.director}</p>
              <p className="text-2xl pb-6">{detailData.duration}</p>
              <p className="text-2xl pb-6">{detailData.rate}</p>
              <CountStars rate={detailData.rate} />
            </div>
            <div className="mb-16">
              {detailData.genre.map((g) => {
                return (
                  <p key={crypto.randomUUID()} className="text-genreColor text-xl">
                    {g}
                  </p>
                );
              })}
            </div>
            <Link to="/" className="border-2 p-4 hover:bg-orange-900">
              BACK TO MOVIELIST
            </Link>
          </article>
        )}
      </section>
    </main>
  );
};

export default MovieDetail;
