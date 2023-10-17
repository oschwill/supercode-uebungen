/* PICTURES */
import brush from '../../assets/img/brush.svg';
import objectSelect from '../../assets/img/object-select.svg';
import megaphone from '../../assets/img/megaphone.svg';
import globeImg from '../../assets/img/globe-line.svg';

const MainTop = () => {
  return (
    <div className="describe-us">
      <div className="describe-intro">
        <p>What We Do</p>
        <h2>We`ve got everything you need to launch and grow your business</h2>
      </div>
      <div className="describe-boxes">
        <div className="box-item">
          <div className="left-side">
            <img src={brush} alt="brush" />
          </div>
          <div className="right-side">
            <h2>Brand Identity</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui sed impedit.
              Facilis aliquid, ipsa asperiores nam fuga magnam, eveniet mollitia reprehenderit
              voluptates est vitae pariatur sint aut sit ipsum.
            </p>
          </div>
        </div>
        <div className="box-item">
          <div className="left-side">
            <img src={objectSelect} alt="object-select" />
          </div>
          <div className="right-side">
            <h2>Illustration</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui sed impedit.
              Facilis aliquid, ipsa asperiores nam fuga magnam, eveniet mollitia reprehenderit
              voluptates est vitae pariatur sint aut sit ipsum.
            </p>
          </div>
        </div>
        <div className="box-item">
          <div className="left-side">
            <img src={megaphone} alt="megaphone" />
          </div>
          <div className="right-side">
            <h2>Marketing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui sed impedit.
              Facilis aliquid, ipsa asperiores nam fuga magnam, eveniet mollitia reprehenderit
              voluptates est vitae pariatur sint aut sit ipsum.
            </p>
          </div>
        </div>
        <div className="box-item">
          <div className="left-side">
            <img src={globeImg} alt="megaphone" />
          </div>
          <div className="right-side">
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui sed impedit.
              Facilis aliquid, ipsa asperiores nam fuga magnam, eveniet mollitia reprehenderit
              voluptates est vitae pariatur sint aut sit ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTop;
