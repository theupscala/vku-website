import React from 'react';

const VisionSection = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 p-8 md:p-14 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">

          {/* Big Vision Image Section */}
          <div className="w-full lg:w-1/2 h-72 md:h-80 rounded-2xl overflow-hidden shadow-md shrink-0 bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
              alt="Our Vision Corporate Building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content & Typography */}
          <div className="flex-1 text-left">
            <h2 className="text-[20px] font-bold tracking-[0.16em] text-vku-orange uppercase mb-4">
              Our Vision
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed">
              To build a forward-looking professional services practice that combines trust, expertise and financial clarity to support businesses and institutions through their evolving requirements.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;