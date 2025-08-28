import { Shield, Target, Heart, TrendingUp } from 'lucide-react';

export default function InvestmentPhilosophy() {
  const principles = [
    {
      icon: Shield,
      title: 'Capital Preservation',
      description: 'Long-term value creation through conservative investment in established companies with steady cash flows.',
    },
    {
      icon: Target,
      title: 'Operational Excellence',
      description: 'Value creation through operational improvements and strategic guidance, not financial engineering.',
    },
    {
      icon: Heart,
      title: 'Values-Driven',
      description: 'Double bottom line approach focusing on both profits and positive impact on all stakeholders.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'We don\'t impose growth—we invite it. We don\'t chase scale—we cultivate substance.',
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            We don't impose growth—we invite it.
            <br />
            <span className="text-cerulean">We don't chase scale—we cultivate substance.</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Our investment philosophy is built on decades of experience as business owners ourselves. 
            We understand what it takes to build something lasting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold">{principle.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}