import React from 'react';
import { Constants } from '../../../../Constants/page';
import Link from 'next/link';

const AdminSideNavigation = () => {
  return (
    <ul className='mt-24 flex h-full w-full flex-col gap-2 px-4 text-lg font-semibold transition-all'>
      {Constants.ADMIN_PANEL.SIDE_BAR.SIDEBAR_LINKS.map((item) => {
        return (
          <li key={item.id}>
            <Link className='hover:underline' href={item.link}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default AdminSideNavigation;
