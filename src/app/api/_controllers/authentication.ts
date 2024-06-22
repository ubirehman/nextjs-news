import { PrismaClient } from '@prisma/client';
import { getJsonWebToken } from '../../../utils/Jsonwebtoken';

interface Credentials {
  email: string;
  password: string;
}

const prisma = new PrismaClient();

export const signIn = async (data: Credentials) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return { success: false, message: "Admin doesn't exist" };
    }

    const { password, ...rest } = user;
    const token = getJsonWebToken(rest.email);
    rest.token = token;

    return ({
      success: true,
      message: 'Admin signed in successfully',
      user: rest,
    });
  } catch (error) {
    console.error('Error during sign-in:', error);
    throw new Error('Failed to sign in');
  } finally {
    await prisma.$disconnect();
  }
};

