// import { Outlet } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className='scroll-smooth font-poppins'>
      <Outlet />
    </div>
  );
}
