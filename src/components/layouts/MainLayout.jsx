// import { Outlet } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import { useSelector } from 'react-redux';

export default function MainLayout() {
  const filterState = useSelector((state) => state.filter);
  //when slider is open, make all component stuck
  return (
    <div
      className={`scroll-smooth font-poppins    ${
        filterState.slider
          ? 'pointer-events-none fixed md:static md:top-0 right-0 h-full w-full  '
          : 'pointer-events-auto  '
      }`}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
