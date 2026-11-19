import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import Container from '../components/common/Container';
import Button from '../components/ui/Button';
import { Briefcase, Users, Award, Mail } from 'lucide-react';

const JoinUs = () => {
  return (
    <div className="bg-vku-background min-h-screen">
      <PageHero
        eyebrow="CAREERS AT VKU"
        title="Join Our Growing Practice"
        description="At V. K. Umbarkar & Co., we cultivate a collaborative environment where talent meets opportunity. Explore your path in audit, taxation, and financial advisory."
      />

      <section className="py-20 bg-white border-t border-gray-100">
        <Container className="max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-vku-primary mb-4">
              Shape the Future of Finance With Us
            </h2>
            <div className="w-16 h-1 bg-vku-orange mx-auto mb-6"></div>
            <p className="text-lg text-vku-text-secondary leading-relaxed">
              We are expanding our teams across our offices in Nagpur, Pune, Chhindwara, and Wardha.
              Detailed openings and application portals will be published here shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-xl bg-vku-surface border border-vku-border text-center shadow-sm">
              <div className="w-14 h-14 bg-vku-primary/10 text-vku-primary rounded-xl flex items-center justify-center mx-auto mb-5">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-vku-primary mb-2">Audit & Assurance</h3>
              <p className="text-sm text-vku-text-secondary">
                Opportunities for Article Assistants and Qualified Chartered Accountants.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-vku-surface border border-vku-border text-center shadow-sm">
              <div className="w-14 h-14 bg-vku-primary/10 text-vku-primary rounded-xl flex items-center justify-center mx-auto mb-5">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-vku-primary mb-2">Direct & Indirect Tax</h3>
              <p className="text-sm text-vku-text-secondary">
                Roles focusing on tax planning, compliance, and corporate litigation.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-vku-surface border border-vku-border text-center shadow-sm">
              <div className="w-14 h-14 bg-vku-primary/10 text-vku-primary rounded-xl flex items-center justify-center mx-auto mb-5">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-vku-primary mb-2">Advisory & Consulting</h3>
              <p className="text-sm text-vku-text-secondary">
                Positions in financial strategy, due diligence, and controller services.
              </p>
            </div>
          </div>

          <div className="bg-vku-primary-dark text-white rounded-2xl p-10 md:p-12 text-center shadow-lg">
            <Mail className="w-10 h-10 text-vku-orange mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Want to work with us?</h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-base leading-relaxed">
              We are always eager to meet driven professionals. Send us your resume or get in touch with our team directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="secondary" size="lg">Contact Recruitment</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default JoinUs;
