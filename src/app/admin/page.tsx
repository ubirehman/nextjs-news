'use client'

import React from 'react';
import AdminSideNavigation from './_components/adminSideNavigation/page';
import CreatePost from './_components/posts/createPost';

const Admin = () => {
  return (
    <div className='flex w-full'>
      <section className='w-1/6'>
        <AdminSideNavigation />
      </section>
      <section className='w-full'>
        <CreatePost />
      </section>
    </div>
  );
};

export default Admin;
