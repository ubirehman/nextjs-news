import { PrismaClient } from '@prisma/client';

interface createPostProps {
  title: string;
  content: string;
}

export const createPost = async ({ title, content }: createPostProps) => {
  const prisma = new PrismaClient();

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        authorId: 1,
      },
    });
    return {
      success: true,
      message: 'Post created successfully',
      post,
    };
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getAllPosts = async () => {
  const prisma = new PrismaClient();

  try {
    const posts = await prisma.post.findMany();

    return {
      success: true,
      message: 'All posts fetched successfully',
      posts,
    };
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const deletePost = async (id: number) => {
  const prisma = new PrismaClient();
  const integerID = parseInt(id[0]);
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: integerID,
      },
    });

    if (!post) {
      return {
        success: false,
        message: `No post associated with the provided id: ${integerID}`,
      };
    }

    await prisma.post.delete({
      where: {
        id: integerID,
      },
    });

    const remainingPosts = await prisma.post.findMany();

    return {
      success: true,
      message: `Post associated with id: ${integerID} deleted successfully`,
      posts: remainingPosts,
    };
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
