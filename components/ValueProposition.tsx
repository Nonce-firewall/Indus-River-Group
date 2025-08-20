import { Users, Handshake, Clock } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      icon: Users,
      title: 'Experienced Operators',
      description: 'Decades of hands-on experience building and scaling family businesses across multiple industries and markets.',
    },
    {
      icon: Handshake,
      title: 'Creative Deal Structuring',
      description: 'Flexible transactions tailored to your needs - full exit, minority stake, or retained majority ownership with growth partnership.',
    },
    {
      icon: Clock,
      title: 'Long-Term Partnership',
      description: 'Patient capital with indefinite hold period. No quick flips, just sustainable growth and enduring value creation.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-indus-blue mb-6">
            Patient Stewardship, Not Extraction
          </h2>
          <p className="text-xl text-charcoal-grey max-w-3xl mx-auto">
            We bring more than capital to the table. Our approach combines operational expertise, 
            flexible structures, and long-term thinking to create sustainable value for all stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center card-hover"
              >
                <div className="w-16 h-16 bg-cerulean bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-cerulean" />
                </div>
                <h3 className="text-xl font-semibold text-indus-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal-grey leading-relaxed">
                  {value.description}
                <Icon className="w-8 h-8 text-white" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}