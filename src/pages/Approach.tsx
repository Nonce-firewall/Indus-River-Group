import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, Handshake, TrendingUp, Shield, Target, CheckCircle } from 'lucide-react';

export default function Approach() {
  const processSteps = [
    {
      icon: Search,
      title: 'Patient Due Diligence',
      description: 'Like archaeological excavation, we carefully uncover business potential through thorough, respectful analysis.',
    },
    {
      icon: Handshake,
      title: 'Flexible Structuring',
      description: 'We tailor transaction structures to align with owner goals, whether full exit, partnership, or growth capital.',
    },
    {
      icon: TrendingUp,
      title: 'Operational Partnership',
      description: 'Active collaboration to implement growth strategies while preserving company culture and values.',
    },
    {
      icon: Shield,
      title: 'Long-term Stewardship',
      description: 'Indefinite hold period allows for sustainable growth focused on lasting value creation.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indus-blue mb-6">
            Investment Approach
          </h1>
          <p className="text-xl text-charcoal-grey max-w-3xl mx-auto">
            Our methodology combines patient capital, operational expertise, and flexible 
            structures to create sustainable value for established businesses.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-indus-blue text-center mb-16">
            Our Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-cerulean bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-10 h-10 text-cerulean" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-indus-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-indus-blue">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}