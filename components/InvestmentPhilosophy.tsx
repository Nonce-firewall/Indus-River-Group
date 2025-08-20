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
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            We don't impose growth—we invite it.
            <br />
            <span className="text-cerulean">We don't chase scale—we cultivate substance.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our investment philosophy is built on decades of experience as business owners ourselves. 
            We understand what it takes to build something lasting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-cerulean bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                  <Icon className="w-6 h-6 text-cerulean" />
                </div>
                <h3 className="text-lg font-semibold">{principle.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
              <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                <Icon className="w-6 h-6 text-white" />
              </div>
            );
          })}
        </div>
      </div>
            )
    }
    )
    }
    </section>
  );
}