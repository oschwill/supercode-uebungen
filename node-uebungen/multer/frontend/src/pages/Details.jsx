import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
  const [singleData, setSingleData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/api/blog/${id}`)
      .then((response) => response.json())
      .then((data) => setSingleData(data));
  }, [id]);

  return (
    <section>
      {singleData ? (
        <article className="flex flex-col gap-4">
          <Link to="/" className="underline text-blue-300 font-bold">
            Zurück zu Home
          </Link>
          <img
            src={`http://localhost:9000/${singleData.headerLink}`}
            alt={singleData.title}
            className="h-[75vh] object-cover"
          />
          <div className="flex items-center justify-between">
            <h2 className="text-[2rem] font-bold">{singleData.blog_title}</h2>
            <span className="pr-4">{singleData.created_at}</span>
          </div>
          <p>{singleData.blog_content}</p>
        </article>
      ) : (
        <p>NO DATA AVAILABLE!!</p>
      )}
    </section>
  );
};

export default Details;
