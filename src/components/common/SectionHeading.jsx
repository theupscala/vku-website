import React from 'react';

const SectionHeading = ({ title, subtitle, align = 'center' }) => {
  const isLeft = align === 'left';
  const isRight = align === 'right';

  return (
    <div className={`${isLeft ? 'text-left' : isRight ? 'text-right' : 'text-center'} mb-8`}>
      {/* Orange color changed to Corporate Blue */}
      {subtitle && (
        <span className="text-sm font-bold tracking-widest text-[#0D3B5C] uppercase block mb-2">
          {subtitle}
        </span>
      )}

      {/* Title */}
      {title && (
        <h2 className="text-[20px] font-bold text-[#0D3B5C] tracking-tight">
          {title}
        </h2>
      )}

      {/* Dark Navy Underline Bar */}
      <div className={`w-16 h-1 bg-[#0D3B5C] ${isLeft ? 'mr-auto' : isRight ? 'ml-auto' : 'mx-auto'} rounded-full mt-3`}></div>
    </div>
  );
};

export default SectionHeading;