'use client';

import React from 'react';
import ContactInfo from './_components/contactInfo';
import SocialIcons from './_components/socialIcons';
import QuickLinks from './_components/quickLinks';
import { Constants } from '../../Constants/page';

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white px-4'>
      <div className='my-10 flex h-40 w-full items-center justify-between pt-4 pb-1'>
        <ContactInfo />
        <SocialIcons />
        <QuickLinks />
      </div>
      <p className='flex w-full justify-end pb-3'>{Constants.FOOTER.COPY_RIGHT_TEXT}</p>
    </div>
  );
};

export default Footer;
