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
    <section className="py-12 sm:py-16 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Patient Stewardship, Not Extraction
          </h2>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            We bring more than capital to the table. Our approach combines operational expertise, 
            flexible structures, and long-term thinking to create sustainable value for all stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 sm:p-8 hover:bg-opacity-20 transition-all duration-300 text-center card-hover"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}