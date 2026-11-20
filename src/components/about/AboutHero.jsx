import React from 'react';
import Container from '../common/Container';

const AboutHero = ({ data }) => {
  return (
    <div className="pt-10 pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24 bg-white relative overflow-hidden flex flex-col items-center text-center">

      {/* Extremely subtle background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-vku-primary-light opacity-30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-vku-primary-light opacity-20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <Container className="relative z-10 flex flex-col items-center w-full">
        {/* Section Heading */}
        <h2 className="text-[20px] font-bold tracking-[0.16em] text-vku-orange uppercase mb-4 md:mb-6 animate-fade-in-up">
          {data.title}
        </h2>

        {/* Decorative Divider */}
        <div className="w-[60px] md:w-[80px] h-[2px] md:h-[3px] bg-vku-orange mb-10 md:mb-14 lg:mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}></div>

        {/* Sub Heading */}
        <h3 className="text-[20px] font-bold text-vku-primary leading-[1.3] tracking-tight max-w-[1300px] mb-8 md:mb-10 lg:mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          "{data.quote}"
        </h3>

        {/* Supporting Description */}
        <p className="text-[15px] text-gray-500 font-normal leading-relaxed max-w-[1100px] animate-fade-in-up mb-12" style={{ animationDelay: '300ms' }}>
          {data.description}
        </p>

        {/* Story Text (Moved from Genesis) */}
        {data.storyContent && (
          <div className="text-left font-normal space-y-6 md:space-y-8 text-[15px] text-gray-500 leading-relaxed w-full animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            {data.storyContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AboutHero;

