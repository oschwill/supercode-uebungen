const MainFocus = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:mx-10 my-6">
      <h2 className="grid col-span-full text-center text-5xl my-4 font-thin text-fontColorGrey md:text-left">
        Main Focus/Mission Statement
      </h2>
      <article className="flex gap-6 items-center">
        <p className="text-5xl font-bold text-fontColorGrey text-[10rem] opacity-50">1</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et
          facilisis placerat.
        </p>
      </article>
      <article className="flex gap-6 items-center">
        <p className="text-5xl font-bold text-fontColorGrey text-[10rem] opacity-50">2</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et
          facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
        </p>
      </article>
    </section>
  );
};

export default MainFocus;
