'use client';

import React from 'react';
import ContactInfo from './_components/contactInfo';
import SocialIcons from './_components/socialIcons';
import QuickLinks from './_components/quickLinks';
import { Constants } from '../../Constants/page';

const Footer = () => {
  return (
    <div className='justify-evenly bg-gray-900 px-8 text-white'>
      <div className='grid h-40 w-full grid-flow-col pb-1 pt-4'>
        <ContactInfo />
        <SocialIcons />
        <QuickLinks />
      </div>
      <p className='flex w-full justify-center -ml-24 pb-3'>
        {Constants.FOOTER.COPY_RIGHT_TEXT}
      </p>
    </div>
  );
};

export default Footer;
