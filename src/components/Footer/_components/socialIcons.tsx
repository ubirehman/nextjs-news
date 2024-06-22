import React from 'react';
import { Constants } from '../../../Constants/page';
import Link from 'next/link';
import Image from 'next/image';

const SocialIcons = () => {
  return (
    <section className='items-center'>
      <h3 className='font-semibold'>{Constants.FOOTER.SOCIAL_ICONS.HEADING}</h3>
      <ul className='gap-2 pt-2'>
        {Constants.FOOTER.SOCIAL_ICONS.LINKS.map((item) => (
          <Link className='flex gap-2 group' key={item.id} href={item.link}>
            <Image
              src={item.icon}
              alt={item.alt}
              width={30}
              height={30}
              className='transition-all group-hover:scale-110'
            />
            {item.name}
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default SocialIcons;
