import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteButton from '../components/main/buttons/FavoriteButton';
import Form from '../components/main/Form';
import { scrollToBottom } from '../utils/scroll';

const Details = () => {
  const [data, setData] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:9000/api/v1/movies/${id}`);

      if (response.ok) {
        const data = await response.json();
        setData(data[0]);
      }
    }

    fetchData();
  }, [id, refresh]);

  return (
    <>
      <section className="pl-16 pr-16 flex flex-col mt-16 justify-center">
        {data ? (
          <>
            <article className="flex flex-col text-[1.5rem] gap-4">
              <h2 className="text-[3rem] font-bold text-tertiaryFontColor">{data.title}</h2>
              <p className="text-white">
                <span>{data.year}</span> | <span>{data.director}</span>
              </p>
              <div className="flex gap-6 mt-6">
                <FavoriteButton id={id} />
                <button
                  className="border-2 p-[2px] pl-2 pr-2 border-secondaryFontColor rounded-3xl text-secondaryFontColor font-bold"
                  onClick={() => {
                    setShowForm(!showForm);
                    scrollToBottom(25);
                  }}
                >
                  Edit Movie
                </button>
              </div>
            </article>
            <article className="grid grid-cols-2 gap-12 text-[1.5rem] mt-6 text-white">
              <div className="flex flex-col gap-6">
                <img
                  src={`${
                    data.poster ? data.poster : 'https://wiki.dave.eu/images/4/47/Placeholder.png'
                  }`}
                  alt={data.title}
                />
                <div className="flex gap-16 items-center">
                  <p>Rating: {data.rated}</p>
                  <p>Duration: {data.runtime ? `${data.runtime} min` : '-'}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-6">
                  {data.genres &&
                    data.genres.length > 0 &&
                    data.genres.map((g) => {
                      return (
                        <p
                          className="bg-secondaryFontColor p-[1px] text-center pb-[5px] pl-4 pr-4 rounded-3xl"
                          key={crypto.randomUUID()}
                        >
                          {g}
                        </p>
                      );
                    })}
                </div>
                <h2 className="text-[3rem] mt-6 text-tertiaryFontColor font-bold">Story</h2>
                <p>{data.plot}</p>
              </div>
            </article>
          </>
        ) : (
          <article className="h-[80vh] flex justify-center items-center">
            <p className="text-[5rem] font-bold">NO DATA AVAILABLE</p>
          </article>
        )}
      </section>
      {showForm && (
        <section className="mt-16 flex justify-center">
          <Form
            title={data.title}
            year={data.year}
            director={data.director}
            genres={data.genres}
            rated={data.rated}
            poster={data.poster}
            plot={data.description}
            method="PUT"
            id={id}
            setRefresh={setRefresh}
          />
        </section>
      )}
    </>
  );
};

export default Details;
