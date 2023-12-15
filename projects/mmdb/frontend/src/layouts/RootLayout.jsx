import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
  return (
    <>
      <section className="bg-mainBackgroundColor">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </section>
    </>
  );
};

export default RootLayout;
