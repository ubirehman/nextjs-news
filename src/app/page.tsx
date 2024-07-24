import { GetServerSideProps } from 'next';
import isEmpty from 'lodash/isEmpty';
import { allPostsProps } from './admin/page';
import { Constants } from '../Constants/page';
import HomeUI from './_page';

interface HomeProps {
  allPosts: allPostsProps[];
}

const Home: React.FC<HomeProps> = ({ allPosts }) => {
  return <HomeUI allPosts={allPosts} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}${Constants.API_LINKS.FETCH_POSTS}`
  );
  const { data } = await response.json();
  const allPosts = isEmpty(data.posts) ? [] : data.posts;

  return {
    props: {
      allPosts,
    },
  };
};

export default Home;
