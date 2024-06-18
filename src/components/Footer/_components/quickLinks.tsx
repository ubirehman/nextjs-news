import React from 'react';
import { Constants } from '../../../Constants/page';
import Link from 'next/link';

const QuickLinks = () => {
  return (
    <div>
      <ul>
        {Constants.FOOTER.QUICK_LINKS.map((item) => (
          <li key={item.id}>
            <Link className='hover:font-semibold transition-all hover:underline text-lg' href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
