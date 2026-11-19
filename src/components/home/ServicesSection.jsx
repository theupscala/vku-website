import React, { useState, useEffect, useRef } from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ServiceCarousel from './ServiceCarousel';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20 pb-8 md:pt-24 md:pb-10 bg-white border-t border-gray-200" ref={sectionRef}>
      <Container className="max-w-[1400px]">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionHeading
            title="Our Services"
            align="center"
          />
          <p className="max-w-3xl mx-auto text-vku-text-secondary mt-2 text-[15px] leading-relaxed">
            Expertise that supports every stage of your business. At V. K. Umbarkar & Co., we bring together professional services designed to support compliance, financial visibility, operational controls and business decision-making.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ServiceCarousel />
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;