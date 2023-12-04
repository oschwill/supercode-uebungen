import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="ml-[5vw] mr-[5vw] mt-[5vh] mb-[5vh]">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
