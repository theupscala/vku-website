import React from 'react';
import Container from '../common/Container';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

const DirectContact = () => {
  return (
    <section className="py-10 md:py-12 bg-[#F7FAFC] border-y border-[#DCE4E9]">
      <Container className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[20px] font-bold tracking-[0.16em] text-vku-orange mb-2">
              Connect with VKU
            </h2>
            <h2 className="text-[20px] font-bold text-[#175888] leading-[1.3] mb-3">
              Tell us about your requirements.
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-5">
              We will help you understand the relevant professional service areas and next steps.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#175888] hover:text-[#F47920] transition-colors duration-300"
            >
              Request a consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Office locations */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-5">
            {[
              { city: "Nagpur", type: "Head Office", inCharge: "CA. Mayank Umbarkar" },
              { city: "Pune", type: "Branch Office", inCharge: "CA. Eesha Umbarkar" },
              { city: "Chhindwara", type: "Branch Office", inCharge: "CA. Anshul Soni" },
              { city: "Wardha", type: "Branch Office", inCharge: "CA. Ajinkya Nandanwar" }
            ].map((office) => (
              <div key={office.city} className="border-t border-[#DCE4E9] pt-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#053151]" />
                  <span className="text-[11px] font-bold tracking-[0.08em] text-[#053151]">{office.type}</span>
                </div>
                <p className="text-[16px] font-bold text-[#172B3A]">{office.city}</p>
                <p className="text-[13px] text-[#667785] mt-0.5">{office.inCharge}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DirectContact;
