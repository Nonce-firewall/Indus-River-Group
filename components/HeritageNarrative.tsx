import { Navigation, Waves, TrendingUp } from 'lucide-react';

export default function HeritageNarrative() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-indus-blue mb-6">
            Rooted in Legacy. Shaped by the River.
          </h2>
          <p className="text-xl text-charcoal-grey max-w-3xl mx-auto">
            Our approach to business stewardship is deeply informed by generations of wisdom 
            in patience, discovery, and natural progression.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Archaeological Legacy */}
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-indus-blue rounded-full flex items-center justify-center mx-auto">
              <Navigation className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-indus-blue">Discovery & Patience</h3>
            <p className="text-charcoal-grey leading-relaxed">
              Our great-grandfather discovered the ancient city of Harappa, teaching us that 
              the greatest treasures require patient excavation and careful stewardship. 
              We apply this same methodical approach to uncovering business potential.
            </p>
          </div>

          {/* River Wisdom */}
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-cerulean rounded-full flex items-center justify-center mx-auto">
              <Waves className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-cerulean">Flow & Guidance</h3>
            <p className="text-charcoal-grey leading-relaxed">
              Our grandfather guided timber down Himalayan rivers, understanding that true 
              strength comes from working with natural currents, not against them. 
              We guide businesses through their natural growth cycles.
            </p>
          </div>

          {/* Modern Application */}
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-warm-grey rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-warm-grey">Stewardship & Growth</h3>
            <p className="text-charcoal-grey leading-relaxed">
              Today, we are stewards, not just investors. We provide more than capital—we 
              offer partnership, patience, and deep respect for the journey that brought 
              your business to this moment.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-serif text-indus-blue italic max-w-4xl mx-auto">
            "We are stewards, not just investors. We provide more than capital—we offer 
            partnership, patience, and deep respect for the journey."
          </blockquote>
        </div>
      </div>
    </section>
  );
}