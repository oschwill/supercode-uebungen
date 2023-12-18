import Form from '../components/main/Form';

const AddMovie = () => {
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
      <article className="flex flex-col justify-center items-center pt-16 relative">
        <h2 className="text-[3rem] font-bold text-secondaryFontColor">Add your own movies</h2>
        <Form method="POST" />
      </article>
    </section>
  );
};

export default AddMovie;
