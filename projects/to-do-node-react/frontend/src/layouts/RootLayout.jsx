import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <main className="h-screen w-[100vw]">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
