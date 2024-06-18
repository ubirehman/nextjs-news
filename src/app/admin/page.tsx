import React from 'react';
import AdminSideNavigation from './_components/adminSideNavigation/page';

const Admin = () => {
  return (
    <div className='flex w-full'>
      <section className='w-1/6'>
        <AdminSideNavigation />
      </section>
      <section className='w-full'>
        COntent
      </section>
    </div>
  );
};

export default Admin;
