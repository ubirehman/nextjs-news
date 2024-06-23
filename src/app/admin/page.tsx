'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import isEmpty from 'lodash/isEmpty';
import AdminSideNavigation from './_components/adminSideNavigation/page';
import CreatePost from './_components/posts/createPost';
import AllPosts from './_components/posts/allPosts';
import { Constants } from '../../Constants/page';

export interface allPostsProps {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorId: number;
  createdAt: string;
}

const Admin = () => {
  const [hash, setHash] = useState(window.location.hash);
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [allPosts, setAllPosts] = useState<allPostsProps[]>([]);

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      content: content,
    };
    console.log(data);
    sessionStorage.setItem('myData', JSON.stringify(data));
    setContent('');
    router.refresh();
  };

  const fetchAllPosts = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}${Constants.API_LINKS.FETCH_POSTS}`
    );

    const { data } = await response.json();
    if (isEmpty(allPosts)) {
      setAllPosts(data.posts);
    }
  };

  const handleDelete = async (id: number) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}${Constants.API_LINKS.DELETE_POST}`
    );

    const { data } = await response.json();
   
  };

  const posts = () => {
    switch (hash) {
      case '#create':
        return (
          <CreatePost
            title={title}
            setTitle={setTitle}
            handleSubmit={handleSubmit}
            content={content}
            setContent={setContent}
          />
        );
      case '#all':
        fetchAllPosts();
        return <AllPosts allPosts={allPosts} handleDelete={handleDelete} />;
      default:
        return null;
    }
  };

  const toggleNavClick = (newHash: string) => {
    window.location.hash = newHash;
    setHash(newHash);
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
