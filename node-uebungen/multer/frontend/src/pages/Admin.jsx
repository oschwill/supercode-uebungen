import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const createBlog = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    fetch('http://localhost:9000/api/blog', {
      method: 'POST',
      body: form,
    }).then((response) => {
      if (response.ok) {
        e.target.reset();
        navigate('/');
      }
    });
  };

  return (
    <section className="w-[50vw] m-auto mb-4 border-2 p-4">
      <Link to="/" className="underline">
        Zurück zu Home
      </Link>
      <h2 className="text-[4rem] text-center">NEW POST</h2>
      <form onSubmit={createBlog} className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label htmlFor="blog_title">TITLE:</label>
          <input
            type="text"
            id="blog_title"
            name="blog_title"
            className="border-2 p-2 bg-gray-300"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="header-img">IMAGE:</label>
          <input
            type="file"
            name="header-img"
            id="header-img"
            className="border-2 p-2 bg-gray-300"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="blog_content">ADD TEXT:</label>
          <textarea
            name="blog_content"
            id="blog_content"
            cols="30"
            rows="10"
            className="border-2 p-2 bg-gray-300"
            required
          ></textarea>
        </div>
        <button className="bg-green-400 p-2 font-bold hover:bg-green-200">PUBLISH</button>
      </form>
    </section>
  );
};

export default Admin;
