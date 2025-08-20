import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink, Users } from 'lucide-react';
import Link from 'next/link';

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
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="/Gaurav. Picture..jpeg" 
                    alt="Gaurav Lal" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
                
                <p className="leading-relaxed">
                  His approach to business leadership emphasizes methodical analysis, 
                  disciplined execution, and the importance of making decisions that 
                  serve the greater good of all stakeholders. This philosophy naturally 
                  extends to his investment approach, where patient stewardship and 
                  sustainable growth take precedence over short-term gains.
                </p>
                
                <p className="leading-relaxed">
                  Gaurav's core belief is that the best businesses are built on integrity, 
                  operational discipline, and a genuine commitment to serving customers 
                  and communities. He brings this values-driven perspective to every 
                  partnership and investment decision.
                </p>
              </div>

              <div className="mt-6">
                <Link 
                  href="https://linkedin.com/in/captain-gaurav-lal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cerulean hover:text-indus-blue transition-colors font-medium"
                >
                  LinkedIn Profile
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Rohin Lal */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="/rohin. picture..jpeg" 
                    alt="Rohin Lal" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
                
                <p className="leading-relaxed">
                  His particular strength lies in understanding how to preserve the 
                  entrepreneurial spirit that made a business successful while 
                  introducing the systems and processes that enable modern scaling. 
                  This balance between honoring heritage and embracing growth is at 
                  the heart of the Indus River approach.
                </p>
                
                <p className="leading-relaxed">
                  Rohin's investment philosophy centers on the belief that the best 
                  partnerships are those where both parties bring complementary 
                  strengths to the table. He focuses on creating environments where 
                  businesses can flourish while maintaining their essential character 
                  and values.
                </p>
              </div>

              <div className="mt-6">
                <Link 
                  href="https://linkedin.com/in/rohinlal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cerulean hover:text-indus-blue transition-colors font-medium"
                >
                  LinkedIn Profile
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Network */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-cerulean rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-indus-blue mb-6">
              Advisory Network
            </h2>
            <p className="text-xl text-charcoal-grey max-w-3xl mx-auto">
              We are supported by an extensive network of industry veterans, former operators, 
              and seasoned investors who provide hands-on guidance across a wide range of 
              business challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-indus-blue">
                Industry Veterans
              </h3>
              <p className="text-charcoal-grey">
                Former executives and entrepreneurs who have built and scaled 
                businesses in our target sectors.
              </p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-indus-blue">
                Operational Experts
              </h3>
              <p className="text-charcoal-grey">
                Specialists in finance, operations, marketing, and technology 
                who help optimize business performance.
              </p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-indus-blue">
                Strategic Partners
              </h3>
              <p className="text-charcoal-grey">
                Investment professionals and advisors who share our 
                patient capital philosophy and values-driven approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}