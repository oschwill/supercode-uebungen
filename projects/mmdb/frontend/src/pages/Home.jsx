// import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import PaginatedItems from '../components/main/paginatedItems';
import { useState } from 'react';

const Home = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  let data = useLoaderData();

  const handleItemsPerPage = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

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
      <section className="pl-16 pr-16 pt-12 relative">
        <h2 className="text-[3rem] font-bold text-secondaryFontColor mb-8">All Movies</h2>
        <div className="flex justify-end sticky top-[30%]">
          {data && data.length > 6 && (
            <select
              name="count-items"
              id="count-items"
              className="w-24 bg-tertiaryFontColor text-white font-bold text-[1.5rem] mb-6 "
              onChange={(e) => handleItemsPerPage(e)}
            >
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
          )}
        </div>
        <PaginatedItems itemsPerPage={itemsPerPage} movies={data} />
      </section>
    </section>
  );
};

export default Home;
