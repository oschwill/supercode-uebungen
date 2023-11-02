import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MovieDataContext } from '../Context/Context';
import CountStars from '../components/filter/output/CountStars';

const MovieDetail = () => {
  const title = useParams();

  const movieData = useContext(MovieDataContext);
  let detailData = movieData && movieData.filter((data) => data.title === title.name);

  return (
    <main>
      <section>
        {detailData && (
          <article className="flex flex-col items-center pt-10 text-white bg-movieBoxBg h-screen">
            <div className="flex flex-col gap-4 text-center">
              <p className="text-9xl pb-6">{detailData[0].title}</p>
              <p className="text-2xl">{detailData[0].year}</p>
              <p className="text-2xl pb-6">{detailData[0].director}</p>
              <p className="text-2xl pb-6">{detailData[0].duration}</p>
              <p className="text-2xl pb-6">{detailData[0].rate}</p>
              <CountStars rate={detailData[0].rate} />
            </div>
            <div className="mb-16">
              {detailData[0].genre.map((g) => {
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
