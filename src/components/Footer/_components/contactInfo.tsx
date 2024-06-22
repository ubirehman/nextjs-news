import React from 'react';
import { Constants } from '../../../Constants/page';

const ContactInfo = () => {
  return (
    <section className='items-center'>
      <h3 className='font-semibold'>
        {Constants.FOOTER.CONTACT_INFORMATION.HEADING}
      </h3>
      <ul>
        {Constants.FOOTER.CONTACT_INFORMATION.CONTACT_INFO.map((item) => (
          <li className='font-semibold' key={item.id}>
            {item.heading + ': ' + item.value}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactInfo;
