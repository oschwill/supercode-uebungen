import aboutImageOne from '../assets/images/about_image1.jpeg';
import aboutImageTwo from '../assets/images/about_image2.jpeg';
import aboutImageThree from '../assets/images/about_image3.jpeg';

const MainAbout = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-[1fr_1fr_2fr] md:gap-6 lg:mx-10">
      <article className="md:flex md:flex-col md:gap-6">
        <img src={aboutImageOne} alt="About Image" />
        <img src={aboutImageThree} alt="About Image" className="max-w-screen-sm md:max-w-full" />
      </article>
      <article className="ml-5 ">
        <img
          src={aboutImageTwo}
          alt="About Image"
          className="md:max-w-full md:h-4/5 md:object-cover md:my-10"
        />
      </article>
      <article className="col-span-full my-6 md:col-span-1">
        <h2 className="text-center text-5xl my-4 font-thin text-fontColorGrey md:w-60 md:text-left">
          About
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <button className="p-6 pr-8 my-4 bg-white text-xs cursor-pointer">READ MORE</button>
      </article>
    </section>
  );
};

export default MainAbout;
