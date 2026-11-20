import React from 'react';
import Container from './Container';

const PageHero = ({ eyebrow, title, description, isQuote = false }) => {
  return (
    <div className="pt-8 pb-10 md:pt-10 md:pb-12 bg-white relative overflow-hidden flex flex-col items-center text-center">
      
      {/* Extremely subtle background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vku-primary-light opacity-30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vku-primary-light opacity-20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <Container className="relative z-10 flex flex-col items-center w-full">
        {/* Section Heading */}
        {eyebrow && (
          <h2 className="text-[20px] font-bold tracking-[0.16em] text-vku-orange animate-fade-in-up">
            {eyebrow}
          </h2>
        )}
        
        {/* Decorative Divider */}
        <div className="w-[85px] h-[3px] bg-vku-orange mt-4 mb-5 md:mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}></div>
        
        {/* Sub Heading */}
        <h3 className="text-[20px] font-bold text-vku-primary leading-[1.3] tracking-tight max-w-[1050px] mb-4 md:mb-5 animate-fade-in-up whitespace-pre-line" style={{ animationDelay: '200ms' }}>
          {isQuote ? `"${title}"` : title}
        </h3>
        
        {/* Supporting Description */}
        <p className="text-[15px] text-gray-500 font-normal leading-relaxed max-w-[1050px] animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {description}
        </p>
      </Container>
    </div>
  );
};

export default PageHero;
