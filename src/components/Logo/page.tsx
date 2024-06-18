"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Constants } from '../../Constants/page';

interface LogoProps {
  className: string;
  link: string;
}

const Logo: React.FC<LogoProps> = ({ className, link }) => {
  const path: string = usePathname();

  if (path === Constants.LINKS.ADMIN || path === Constants.LINKS.LOGIN)
    return null;

  return (
    <Link href={link} className={className}>
      {Constants.COMPANY_IDENTITY}
    </Link>
  );
};

export default Logo;
