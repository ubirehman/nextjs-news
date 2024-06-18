"use client"

import React from 'react';
import ContactInfo from './_components/contactInfo';
import SocialIcons from './_components/socialIcons';
import QuickLinks from './_components/quickLinks';

const Footer = () => {
  return (
    <div className='my-10 flex h-40 w-full bg-gray-900 p-4 text-white justify-evenly items-center'>
     <ContactInfo />
     <SocialIcons />
     <QuickLinks />
    </div>
  );
};

export default Footer;
