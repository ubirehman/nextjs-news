'use client';

import { useParams } from 'next/navigation';
import isEmpty from 'lodash/isEmpty';
import React, { useEffect, useState } from 'react';
import { Constants } from '../../../Constants/page';
import { formatDate } from '../../../utils/DateFormatter';

interface articlProps {
  title: string;
  content: string;
  createdAt: string;
}
const Article = () => {
  const params = useParams();
  const { id } = params;
  const [postData, setPostData] = useState<articlProps>({
    title: '',
    content: '',
    createdAt: '',
  });

  const fetchPostById = async () => {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_SERVER_URL
      }${Constants.API_LINKS.GET_POST_BY_ID.replace('{id}', id[0])}`
    );

    const { data } = await response.json();
    const { post } = data;
    setPostData(post);
  };

  useEffect(() => {
    fetchPostById();
  }, []);

  if (isEmpty(postData)) {
    return 'Loading';
  }
  return (
    <div className='flex min-h-[75vh] w-full flex-col px-6 py-12'>
      <h1 className='py-1 text-3xl font-semibold underline'>
        {postData.title}
      </h1>
      <p className='py-1 text-xs text-gray-600'>
        {formatDate(postData.createdAt)}
      </p>
      <p className='py-2'>{postData.content}</p>
    </div>
  );
};

export default Article;
