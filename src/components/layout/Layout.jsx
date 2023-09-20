import Navbar from '../appbar/Navbar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
