import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UrlContext } from '../App';
import DetailItem from '../components/beerDetail/DetailItem';
import HomeButton from '../components/buttons/HomeButton';

/* IMAGE */
import logo from '../assets/images/Logo.png';

const BeerDetail = () => {
  const [beerDetailData, setBeerDetailData] = useState({});
  const beerId = useParams();

  const url = useContext(UrlContext);

  const getBeerDetailData = () => {
    fetch(`${url}${'id' in beerId ? beerId?.id : ''}`)
      .then((response) => response.json())
      .then((data) => setBeerDetailData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBeerDetailData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      {beerDetailData && <DetailItem beerDetailData={beerDetailData} />}
      <HomeButton logo={logo} />
    </main>
  );
};

export default BeerDetail;
