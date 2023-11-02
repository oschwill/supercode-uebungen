import { useContext } from 'react';
import { MovieDataContext } from '../../../Context/Context';
import { Link } from 'react-router-dom';
import CountStars from './CountStars';

const MovieList = () => {
  const movieData = useContext(MovieDataContext);

  return (
    <section className="grid grid-cols-5 gap-4 mt-16 w-11/12">
      {movieData.length > 0 ? (
        movieData.map((data, index) => {
          return (
            <article
              className="bg-movieBoxBg text-white flex flex-col text-center gap-6 pt-8 pb-12 relative"
              key={crypto.randomUUID()}
            >
              <div className="flex flex-col gap-4">
                <p>{data.title}</p>
                <p>{data.year}</p>
                <p>{data.director}</p>
                <p>{data.duration}</p>
                <p>{data.rate}</p>
                <CountStars rate={data.rate} />
              </div>
              <div>
                {data.genre.map((g) => {
                  return (
                    <p key={crypto.randomUUID()} className="text-genreColor">
                      {g}
                    </p>
                  );
                })}
              </div>
              <Link
                to={`/detail/${index}`}
                target="_blank"
                className="border-2 hover:bg-slate-600 absolute bottom-1 w-full"
              >
                VIEW MOVIE
              </Link>
            </article>
          );
        })
      ) : (
        <p className="text-9xl col-span-full text-center">No Movie found</p>
      )}
    </section>
  );
};

export default MovieList;
