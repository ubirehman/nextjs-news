'use client';
import React from 'react';
import { authenticate } from '../lib/actions';
import LoginForm from '../../components/LoginForm/page';
import { useRouter } from 'next/navigation';
import { Constants } from '../../Constants/page';
import { failureNotify, successNotify } from '../../utils/Notifications';

const Login = () => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const credential = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const auth = await authenticate(credential);
    if (!auth.success) {
      failureNotify(Constants.POPUP_MESSAGES.USER_LOGEDIN_FAIL_MESSAGE);
      return;
    }
    successNotify(Constants.POPUP_MESSAGES.USER_LOGEDIN_SUCCESS_MESSAGE);
    setTimeout(() => {
      router.push('/admin#all');
    }, 1500);
  };

  return (
    <div className='h-[75vh]'>
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
