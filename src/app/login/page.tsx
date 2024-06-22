'use client';
import React from 'react';
import { authenticate } from '../lib/actions';
import LoginForm from '../../components/LoginForm/page';
import { useRouter } from 'next/navigation';


const Login = () => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const credential = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const auth = await authenticate(credential);
    if (auth.success) {
      router.push('/admin#all');
    }
    console.log(auth)
  };

  return (
    <div className='h-[75vh]'>
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
