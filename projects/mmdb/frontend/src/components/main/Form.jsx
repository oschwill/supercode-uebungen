import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ title, year, director, genres, rated, poster, plot, method, id, setRefresh }) => {
  const [input, setInput] = useState({
    title: title ? title : '',
    year: year ? year : '',
    director: director ? director : '',
    genres: genres ? genres : '',
    rated: rated ? rated : '',
    poster: poster ? poster : '',
    plot: plot ? plot : '',
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (
      e.target.title.value === '' ||
      e.target.year.value === '' ||
      e.target.director.value === '' ||
      e.target.genres.value === '' ||
      e.target.rated.value === '' ||
      e.target.poster.value === '' ||
      e.target.plot.value === ''
    ) {
      console.log('ERROR');
      setErrorMessage('Bitte füllen Sie alle Felder aus!!');
      return;
    }

    if (!e.target.poster.value.startsWith('http')) {
      setErrorMessage('Das Poster muss eine Image Adresse sein!');
      return;
    }

    const form = new FormData(e.target);

    form.delete('genres');

    if (e.target.genres.value[e.target.genres.value.length - 1] === ',') {
      e.target.genres.value = e.target.genres.value.slice(0, -1);
    }

    for (const item of e.target.genres.value.split(',')) {
      form.append('genres[]', item);
    }

    const response = await fetch(`http://localhost:9000/api/v1/movies/${id ? id : ''}`, {
      method: method,
      body: form,
    });

    if (response.ok) {
      switch (method) {
        case 'POST':
          setSuccessMessage('DATENSATZ HINZUGEFÜGT');
          break;
        case 'PUT':
          setSuccessMessage('DATENSATZ GEÄNDERT');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;

        default:
          break;
      }
      setRefresh && setRefresh(crypto.randomUUID());
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
      return;
    }

    // ERRORHANDLING
    const data = await response.json();
    if (data.message.includes('genres')) {
      console.log(data.message);
      setErrorMessage('Fehlgeschlagen, Genre müssen mit einem Komma separiert werden');
      return;
    }

    setErrorMessage(data.message);
  };

  return (
    <form
      className="bg-mainBackgroundColor w-[30%] flex flex-col gap-4 relative"
      onSubmit={onSubmit}
    >
      <div>
        <label htmlFor="title" className="text-white">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="w-full p-2 rounded-3xl pl-4"
          // value={title && title}
          value={input.title && input.title}
          onChange={(e) => {
            setInput({
              ...input,
              title: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="year" className="text-white">
          Year:
        </label>
        <input
          type="text"
          name="year"
          id="year"
          placeholder="Year"
          className="w-full p-2 rounded-3xl pl-4"
          value={input.year && input.year}
          onChange={(e) => {
            setInput({
              ...input,
              year: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="director" className="text-white">
          Director
        </label>
        <input
          type="text"
          name="director"
          id="director"
          placeholder="Director"
          className="w-full p-2 rounded-3xl pl-4"
          value={input.director && input.director}
          onChange={(e) => {
            setInput({
              ...input,
              director: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="genres" className="text-white">
          Genres:
        </label>
        <input
          type="text"
          name="genres"
          id="genres"
          placeholder="Genre => example: Horror,Thriller,Comedy"
          className="w-full p-2 rounded-3xl pl-4"
          value={input.genres && input.genres}
          onChange={(e) => {
            setInput({
              ...input,
              genres: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="rated" className="text-white">
          Rated:
        </label>
        <input
          type="text"
          name="rated"
          id="rated"
          placeholder="Rate"
          className="w-full p-2 rounded-3xl pl-4"
          value={input.rated && input.rated}
          onChange={(e) => {
            setInput({
              ...input,
              rated: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="poster" className="text-white">
          Poster:
        </label>
        <input
          type="text"
          name="poster"
          id="poster"
          placeholder="URL for movieposter"
          className="w-full p-2 rounded-3xl pl-4"
          value={input.poster && input.poster}
          onChange={(e) => {
            setInput({
              ...input,
              poster: e.target.value,
            });
          }}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="plot" className="text-white">
          Description:
        </label>
        <textarea
          name="plot"
          id="plot"
          cols="10"
          rows="5"
          placeholder="Description"
          className="w-full p-2 rounded-3xl pl-4"
          value={input.plot && input.plot}
          onChange={(e) => {
            setInput({
              ...input,
              plot: e.target.value,
            });
          }}
        ></textarea>
      </div>
      <p className="font-bold text-red-400 text-[1.5rem] text-center absolute bottom-10 w-[100%] left-0">
        {errorMessage && errorMessage}
      </p>
      <p className="font-bold text-green-500 text-[1.5rem] text-center fixed bottom-[20%] w-[50%] left-[25%] bg-green-100">
        {successMessage && successMessage}
      </p>
      <button className="bg-secondaryFontColor text-primaryFontColor p-2 rounded-3xl mt-6">
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  director: PropTypes.string,
  genres: PropTypes.array,
  rated: PropTypes.string,
  poster: PropTypes.string,
  plot: PropTypes.string,
  method: PropTypes.string,
  id: PropTypes.string,
  setRefresh: PropTypes.func,
};

export default Form;
