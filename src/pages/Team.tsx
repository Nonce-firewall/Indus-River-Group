import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExternalLink, Users } from 'lucide-react';

export default function Team() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indus-blue mb-6">
            Our Team
          </h1>
          <p className="text-xl text-charcoal-grey max-w-3xl mx-auto">
            Experienced operators with decades of hands-on business leadership, 
            united by a commitment to patient stewardship and sustainable growth.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gaurav Lal */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-indus-blue mb-2">
                  Gaurav Lal
                </h3>
                <p className="text-cerulean font-semibold">Managing Partner</p>
              </div>
              
              <div className="space-y-4 text-charcoal-grey">
                <p className="leading-relaxed">
                  Gaurav brings decades of leadership experience in high-stakes environments 
                  where operational excellence and sound judgment are paramount. His background 
                  has instilled a deep appreciation for building strong foundations and 
                  thinking strategically about long-term outcomes.
                </p>
              </div>

              <div className="mt-6">
                <a 
                  href="https://linkedin.com/in/captain-gaurav-lal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cerulean hover:text-indus-blue transition-colors font-medium"
                >
                  LinkedIn Profile
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Rohin Lal */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-indus-blue mb-2">
                  Rohin Lal
                </h3>
                <p className="text-cerulean font-semibold">Managing Partner</p>
              </div>
              
              <div className="space-y-4 text-charcoal-grey">
                <p className="leading-relaxed">
                  Rohin combines entrepreneurial instinct with analytical rigor, bringing 
                  multi-industry experience and a talent for identifying opportunities 
                  where others see only complexity. His versatile background spans 
                  various business contexts and operational challenges.
                </p>
              </div>

              <div className="mt-6">
                <a 
                  href="https://linkedin.com/in/rohinlal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cerulean hover:text-indus-blue transition-colors font-medium"
                >
                  LinkedIn Profile
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}