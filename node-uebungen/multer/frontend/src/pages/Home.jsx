import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/blog')
      .then((response) => response.json())
      .then((data) => setBlogData(data));
  }, []);

  return (
    <section className="grid grid-cols-3 gap-10">
      {blogData &&
        blogData.length > 0 &&
        blogData.map((d) => {
          return (
            <article key={d.id} className="flex flex-col gap-2 border-2 max-h-[400px]">
              <img
                src={`http://localhost:9000/${d.headerLink}`}
                alt={d.title}
                className="h-[50%] object-cover"
              />
              <div className="flex items-center justify-between">
                <h2 className="text-[2rem] font-bold pl-4">{d.blog_title}</h2>
                <span className="pr-4">{d.created_at}</span>
              </div>
              <p className="pl-4">
                {d.blog_content.slice(0, 200)}
                {d.blog_content.length > 200 && '...'}
              </p>
              <Link
                to={`/details/${d.id}`}
                className="p-4 underline font-bold text-blue-400"
                target="_blank"
              >
                READ MORE
              </Link>
            </article>
          );
        })}
    </section>
  );
};

export default Home;
