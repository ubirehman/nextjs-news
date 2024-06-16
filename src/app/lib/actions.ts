'use server';

import { signIn } from '../api/_controllers/authentication';

interface Credentials {
  email: string;
  password: string;
}

export async function authenticate(credentials: Credentials) {
  try {
    const response = await fetch('http://localhost:3000/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong.');
    }
    const responseData = await response.json();
    console.log("Response data ", responseData)
    return responseData;
  } catch (error: any) {
    console.error('Error during authentication:', error);

    if (error.message === 'Invalid credentials') {
      return 'Invalid credentials.';
    }

    return 'Something went wrong.';
  }
}
