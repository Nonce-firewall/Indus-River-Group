import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Navigation, Waves, TrendingUp, Shield, Heart, Handshake, Users } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-indus-blue mb-6">
              Our Story
            </h1>
            <p className="text-xl text-charcoal-grey max-w-3xl mx-auto">
              Rooted in a heritage of discovery and stewardship, shaped by generations 
              of wisdom in patience and natural progression.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Archaeological Discovery */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-indus-blue rounded-full flex items-center justify-center">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-indus-blue">
                Archaeological Legacy
              </h3>
              <p className="text-charcoal-grey leading-relaxed">
                Our great-grandfather, Rai Bahadur Daya Ram Sahni, made one of archaeology's 
                most significant discoveries when he uncovered the ancient city of Harappa in 1921. 
                This foundational moment taught our family that the greatest treasures require 
                patient excavation, methodical approach, and deep respect for what came before.
              </p>
              <p className="text-charcoal-grey leading-relaxed">
                His discovery revealed an entire civilization that had been hidden for millennia, 
                demonstrating the profound value that lies beneath the surface when approached 
                with knowledge, patience, and reverence.
              </p>
            </div>

            {/* River Wisdom */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-cerulean rounded-full flex items-center justify-center">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-cerulean">
                River Guidance
              </h3>
              <p className="text-charcoal-grey leading-relaxed">
                Our grandfather spent his life guiding timber down the treacherous rivers 
                flowing from the Himalayas. This work taught him—and through him, us—that 
                true strength comes not from fighting natural currents, but from understanding 
                them and working in harmony with their flow.
              </p>
              <p className="text-charcoal-grey leading-relaxed">
                He learned that the river shapes and seasons everything it touches, that 
                patience and respect for natural rhythms create more value than force ever could. 
                The river became his teacher, and its lessons became ours.
              </p>
            </div>

            {/* Modern Application */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-warm-grey rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-warm-grey">
                Business Stewardship
              </h3>
              <p className="text-charcoal-grey leading-relaxed">
                Today, we apply these generational lessons to business investment and stewardship. 
                Like our great-grandfather's archaeological work, we carefully excavate the 
                hidden potential in established businesses, respecting their heritage while 
                uncovering new possibilities.
              </p>
              <p className="text-charcoal-grey leading-relaxed">
                Like our grandfather's river guidance, we understand that businesses have 
                natural rhythms and currents. We work with these forces, providing steady 
                guidance while allowing the inherent strength of the business to carry it forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-indus-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <blockquote className="text-xl font-serif italic leading-relaxed">
              "To build enduring businesses through patient capital, operational excellence, 
              and values-driven stewardship. We honor the legacy of founders while nurturing 
              the next chapter of growth, creating lasting value for all stakeholders—owners, 
              employees, communities, and investors."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-indus-blue text-center mb-16">
            What Sets Us Apart
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indus-blue mb-4">
                No Forced Exit Timeline
              </h3>
              <p className="text-charcoal-grey leading-relaxed">
                Unlike traditional private equity firms with rigid 5-year exit requirements, 
                we hold our investments indefinitely. This allows businesses to grow at 
                their natural pace and make decisions based on long-term value, not forced timelines.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indus-blue mb-4">
                Values-Driven Approach
              </h3>
              <p className="text-charcoal-grey leading-relaxed">
                Our core values of integrity, excellence, stewardship, and leadership 
                guide every decision. We believe that doing right by people and communities 
                ultimately creates better long-term returns.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indus-blue mb-4">
                Flexible Structures
              </h3>
              <p className="text-charcoal-grey leading-relaxed">
                We offer full buyouts, minority investments, or growth partnerships—whatever 
                structure best serves the business owner's goals and the company's needs. 
                One size doesn't fit all.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indus-blue mb-4">
                Operator Experience
              </h3>
              <p className="text-charcoal-grey leading-relaxed">
                With over 50 years of combined experience owning and operating family businesses, 
                we understand the challenges firsthand. We've been in your shoes and know what 
                it takes to build something lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}