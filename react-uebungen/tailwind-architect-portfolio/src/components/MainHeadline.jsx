import headlineImage from '../assets/images/headline_image.jpeg';

const MainHeadline = () => {
  return (
    <section className="my-20 md:flex lg:m-8 lg:mx-10">
      <article className="md:w-2/5 md:flex md:justify-center md:items-center">
        <h2 className="text-center text-5xl md:w-60 md:text-left">
          <span className="font-thin text-fontColorGrey">PROJECT</span>{' '}
          <span className="font-bold">Lorum</span>
        </h2>
      </article>
      <article className="relative md:w-3/5">
        <img src={headlineImage} alt="" />
        <button className="p-4 pr-10 absolute bottom-0 bg-white text-xs cursor-pointer">
          VIEW PROJECT
        </button>
      </article>
    </section>
  );
};

export default MainHeadline;
