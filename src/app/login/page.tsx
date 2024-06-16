'use client';
import React from 'react';
import AntDLoginForm from '../../components/AntDLoginForm/page';
import { authenticate } from '../lib/actions';

interface credentials {
  email: string;
  password: string;
}

const Login = () => {
  return (
    <div className='h-[75vh]'>
      <AntDLoginForm handleSubmit={(e: credentials) => authenticate(e)} />
    </div>
  );
};

export default Login;
