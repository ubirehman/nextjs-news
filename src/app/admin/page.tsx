'use client';

import React, { useEffect, useState } from 'react';
import AdminSideNavigation from './_components/adminSideNavigation/page';
import CreatePost from './_components/posts/createPost';
import { Constants } from '../../Constants/page';
import { usePathname } from 'next/navigation';
import AllPosts from './_components/posts/allPosts';

const Admin = () => {
  const [hash, setHash] = useState(window.location.hash);

  const posts = () => {
    switch (hash) {
      case '#create':
        return <CreatePost />;
      case '#all':
        return <AllPosts />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleNavClick = (newHash) => {
    window.location.hash = newHash;
    setHash(newHash);
  };

  return (
    <div className='flex w-full'>
      <section className='w-1/6'>
        <AdminSideNavigation toggleNavClick={toggleNavClick} />
      </section>
      <section className='w-full'>{posts()}</section>
    </div>
  );
};

export default Admin;
