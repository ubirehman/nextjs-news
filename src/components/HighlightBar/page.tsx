'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Constants } from '../../Constants/page';
interface HighlightBarProps {
  highlightNews: string;
}

const HighlightBar: React.FC<HighlightBarProps> = ({ highlightNews }) => {
  const path: string = usePathname();
  
  if (path === Constants.LINKS.ADMIN || path === Constants.LINKS.LOGIN)
    return null;

  return (
    <div className='relative flex h-7 w-full items-end justify-end overflow-hidden bg-slate-900/80 text-white shadow-sm drop-shadow-md'>
      <div className='absolute flex h-7 animate-marquee whitespace-nowrap'>
        <p className='translate max-h-7'>{highlightNews}</p>
      </div>
    </div>
  );
};

export default HighlightBar;
