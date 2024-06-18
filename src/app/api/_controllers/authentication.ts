import { PrismaClient } from '@prisma/client';
import { getJsonWebToken } from '../../../utils/Jsonwebtoken';
import { NextResponse } from 'next/server';
import { message } from 'antd';

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

    return {
      success: true,
      message: 'Admin signed in successfully',
      user: rest,
    };
  } catch (error) {
    console.error('Error during sign-in:', error);
    throw new Error('Failed to sign in');
  } finally {
    await prisma.$disconnect();
  }
};

export async function POST(request: Request) {
  try {
    const data: Credentials = await request.json();
    const response = await signIn(data);

    console.log(response);
    return Response.json({ message: 'testssadasdsd' });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ success: false, message: 'Failed to sign in' });
  }
}
