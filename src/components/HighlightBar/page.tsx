import React from 'react';

interface HighlightBarProps {
  highlightNews: string;
}

const HighlightBar: React.FC<HighlightBarProps> = ({ highlightNews }) => {
  return (
    <div className='relative flex h-7 w-full items-end justify-end overflow-hidden bg-slate-900/80 text-white shadow-sm drop-shadow-md'>
      <div className='absolute flex h-7 animate-marquee whitespace-nowrap'>
        <p className='translate max-h-7'>{highlightNews}</p>
      </div>
    </div>
  );
};

export default HighlightBar;
