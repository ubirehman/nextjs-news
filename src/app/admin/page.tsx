'use client';

import React, { useEffect, useState } from 'react';
import AdminSideNavigation from './_components/adminSideNavigation/page';
import CreatePost from './_components/posts/createPost';
import AllPosts from './_components/posts/allPosts';

const Admin = () => {
  const [hash, setHash] = useState(window.location.hash);

  const [content, setContent] = useState<string>('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      content: content,
    };
    console.log(data);
    sessionStorage.setItem('myData', JSON.stringify(data));
    setContent('');
  };

  const posts = () => {
    switch (hash) {
      case '#create':
        return (
          <CreatePost
            handleSubmit={handleSubmit}
            content={content}
            setContent={setContent}
          />
        );
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

  const toggleNavClick = (newHash: string) => {
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
