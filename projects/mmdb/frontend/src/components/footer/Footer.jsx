const Footer = () => {
  return (
    <footer className="mt-16 pl-16 pr-16 bg-secondaryFontColor text-mainBackgroundColor">
      <section className="flex justify-between h-[75px] items-center font-bold">
        <article>Imprint</article>
        <article className="flex gap-4">
          <p> Made with love in heart and popcorn in tummy. </p>
          <img src="./images/Heart_Icon.png" alt="Heart" />
        </article>
        <article className="flex items-center gap-4">
          <img src="./images/Youtube_Icon.png" alt="youtube" className="h-[25px]" />
          <img src="./images/Facebook_Icon.png" alt="facebook" className="h-[25px]" />
        </article>
      </section>
    </footer>
  );
};

export default Footer;
