/* IMAGES */
import saladImg from '../../assets/img/salat.jpeg';
import pizzaImg from '../../assets/img/pizza.jpeg';
import frikaImg from '../../assets/img/frikadellen.jpeg';
import glasImg from '../../assets/img/glass.jpeg';
import secondPizzaImg from '../../assets/img/pizza2.jpeg';
import spagetthiImg from '../../assets/img/spagetthi.jpeg';
import tellerImg from '../../assets/img/teller.jpeg';
import scampiImg from '../../assets/img/scampi.jpeg';

const MainBottom = () => {
  return (
    <div className="gallery">
      <div className="gallery-item">
        <img src={saladImg} alt="Salat" />
        <h2>Fusce dictum finibus</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptates quidem,
          doloremque dolor omnis
        </p>
        <span className="price">$45 / $55</span>
      </div>
      <div className="gallery-item">
        <img src={pizzaImg} alt="Pizza" />
        <h2>Aliquam Sagnittis</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptates quidem,
          doloremque dolor omnis
        </p>
        <span className="price">$45 / $55</span>
      </div>
      <div className="gallery-item">
        <img src={frikaImg} alt="Frikadellen" />
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptates quidem,
          doloremque dolor omnis
        </p>
        <span className="price">$45 / $55</span>
      </div>
      <div className="gallery-item">
        <img src={glasImg} alt="Glas" />
        <h2>Fusce dictum finibus</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptates quidem,
          doloremque dolor omnis
        </p>
        <span className="price">$45 / $55</span>
      </div>
      <div className="gallery-item">
        <img src={secondPizzaImg} alt="Pizza2" />
        <h2>Lorem, ipsums</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptates quidem,
          doloremque dolor omnis
        </p>
        <span className="price">$45 / $55</span>
      </div>
      <div className="gallery-item">
        <img src={scampiImg} alt="Scampi" />
        <h2>Fusce dictum finibus</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptates quidem,
          doloremque dolor omnis
        </p>
        <span className="price">$45 / $55</span>
      </div>
      <div className="gallery-item">
        <img src={spagetthiImg} alt="Spagetthi" />
        <h2>Fusce dictum </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptates quidem,
          doloremque dolor omnis
        </p>
        <span className="price">$45 / $55</span>
      </div>
      <div className="gallery-item">
        <img src={tellerImg} alt="Teller" />
        <h2>dictum finibus</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptates quidem,
          doloremque dolor omnis
        </p>
        <span className="price">$45 / $55</span>
      </div>
    </div>
  );
};

export default MainBottom;
