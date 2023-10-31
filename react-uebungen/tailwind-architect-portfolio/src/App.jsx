import Header from './components/Header';
import './App.css';

import MainHeadline from './components/MainHeadline';
import MainAbout from './components/MainAbout';
import MainFocus from './components/MainFocus';

import projectImageOne from './assets/images/Project_image1.png';
import projectImageTwo from './assets/images/Project_image2.png';
import projectImageThree from './assets/images/Project_image3.png';
import projectImageFour from './assets/images/Project_image4.png';
import projectImageFive from './assets/images/Project_image5.png';

function App() {
  // text-20xl
  return (
    <>
      <Header />
      <main>
        <MainHeadline />
        <MainAbout />
        <MainFocus />
        <section className="flex flex-col gap-4">
          <h2 className="grid col-span-full text-center text-5xl my-4 font-thin text-fontColorGrey md:text-left">
            Our Projects
          </h2>
          <div className="mr-auto ml-auto md:flex md:gap-4">
            <img src={projectImageOne} alt="project image" className="w-full" />
            <img src={projectImageTwo} alt="project image" className="w-full" />
          </div>
          <div className="md:flex md:gap-4">
            <img src={projectImageThree} alt="project image" className="w-full" />
            <img src={projectImageFour} alt="project image" className="w-full" />
            <img src={projectImageFive} alt="project image" className="w-full" />
          </div>
          <button className="p-6 pr-10 my-4 bg-backgroundColor text-xs cursor-pointer text-white ml-auto w-1/5">
            ALL PROJECTS
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
