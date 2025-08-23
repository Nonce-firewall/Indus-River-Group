import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
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

      {/* Investment Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-indus-blue text-center mb-16">
            Investment Criteria
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Industry & Market Dynamics */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-cerulean mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-2" />
                  Industry & Market Dynamics
                </h3>
                <ul className="space-y-3 text-charcoal-grey">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Large, fragmented markets with no dominant player
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Niche leaders scalable via strategic consolidation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Inefficient markets where scale creates outsized value
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Defensive characteristics and favorable long-term trends
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cerulean mb-4">
                  What We Like to See
                </h3>
                <ul className="space-y-3 text-charcoal-grey">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Leading position in niche market with defensible moat
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Experienced, committed management team
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Unique products or processes that are hard to replicate
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Strong customer relationships and recurring revenue streams
                  </li>
                </ul>
              </div>
            </div>

            {/* Company Characteristics */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-cerulean mb-4">
                  Company Characteristics
                </h3>
                <ul className="space-y-3 text-charcoal-grey">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Multiple growth avenues and expansion opportunities
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Predictable, recurring cash flows
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Low capital expenditure requirements
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-green mr-3 mt-0.5 flex-shrink-0" />
                    Diversified customer and supplier base
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-indus-blue mb-4">
                  Target Investment Size
                </h3>
                <div className="grid grid-cols-2 gap-4 text-charcoal-grey">
                  <div>
                    <div className="text-2xl font-bold text-cerulean">$1M–$5M</div>
                    <div className="text-sm">EBITDA Range</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cerulean">$3.5M–$50M</div>
                    <div className="text-sm">Revenue Range</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-indus-blue">North America HQ</div>
                    <div className="text-sm">Primary Focus</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-indus-blue">Selective in India</div>
                    <div className="text-sm">Secondary Market</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
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
                    <div className="w-20 h-20 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-10 h-10 text-white" />
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

      {/* Partnership Philosophy */}
      <section className="py-16 bg-indus-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Partnership Philosophy
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl leading-relaxed">
              We believe the best investments are true partnerships where both parties 
              bring complementary strengths. Our role is to provide not just capital, 
              but operational expertise, strategic guidance, and the patience necessary 
              for sustainable growth.
            </p>
            <blockquote className="text-2xl font-serif italic text-cerulean">
              "We don't impose growth—we invite it. We don't chase scale—we cultivate substance."
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}