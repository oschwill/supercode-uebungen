// import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const data = useLoaderData();

  return (
    <section>
      <article className="relative">
        <h2 className="text-[3rem] absolute top-[25%] left-[20%] font-bold text-tertiaryFontColor">
          MovieMagicDatabase has it all. But you can still add to it.
        </h2>
        <img
          src="./images/HomeHeaderPic.png"
          alt="Home Header"
          className="object-cover h-[75vh] w-full"
        />
      </article>
      <section className="pl-16 pr-16 pt-12">
        <h2 className="text-[3rem] font-bold text-secondaryFontColor">All Movies</h2>
        <article className="grid grid-cols-3 gap-16">
          {data && data.length > 0 ? (
            data.map((d) => {
              return (
                <Link to={`/details/${d._id}`} key={d._id}>
                  <div className="flex flex-col">
                    <img
                      src={`${
                        d.poster ? d.poster : 'https://wiki.dave.eu/images/4/47/Placeholder.png'
                      }`}
                      alt={d.title}
                    />
                    <p className="text-primaryFontColor">{d.title}</p>
                    <p className="text-secondaryFontColor">{d.director}</p>
                  </div>
                </Link>
              );
            })
          ) : (
            <p>NO DATA!</p>
          )}
        </article>
      </section>
    </section>
  );
};

export default Home;
