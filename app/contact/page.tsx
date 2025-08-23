'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Users, Briefcase, Handshake } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indus-blue mb-6">
            Start a Conversation
          </h1>
          <p className="text-xl text-charcoal-grey max-w-3xl mx-auto">
            Whether you're a business owner considering partnership, an investor 
            exploring opportunities, or an intermediary with a quality deal, 
            we'd like to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Business Owners */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-cerulean rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indus-blue mb-4">
                For Business Owners
              </h3>
              <p className="text-charcoal-grey mb-6 leading-relaxed">
                If you're considering a sale or partnership, we speak your language. 
                Our principals have been owner-operators themselves, so we understand 
                that your business is more than numbers—it's your life's work.
              </p>
              <div className="text-sm text-warm-grey">
                <div className="mb-2">✓ Confidential discussions</div>
                <div className="mb-2">✓ Flexible deal structures</div>
                <div>✓ Respectful process</div>
              </div>
            </div>

            {/* Investors */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-indus-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indus-blue mb-4">
                For Investors
              </h3>
              <p className="text-charcoal-grey mb-6 leading-relaxed">
                We operate as an independent sponsor, partnering with aligned 
                investors who share our patient capital philosophy and 
                values-driven approach to business building.
              </p>
              <div className="text-sm text-warm-grey">
                <div className="mb-2">✓ Co-investment opportunities</div>
                <div className="mb-2">✓ Curated deal flow</div>
                <div>✓ Aligned interests</div>
              </div>
            </div>

            {/* Intermediaries */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-warm-grey rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indus-blue mb-4">
                For Intermediaries
              </h3>
              <p className="text-charcoal-grey mb-6 leading-relaxed">
                We work with investment bankers, business brokers, and other 
                intermediaries who represent quality businesses that fit our 
                criteria and values.
              </p>
              <div className="text-sm text-warm-grey">
                <div className="mb-2">✓ Competitive referral fees</div>
                <div className="mb-2">✓ Reliable execution</div>
                <div>✓ Clear process</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indus-blue text-center mb-12">
            Direct Contact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-indus-blue">Email</h3>
              <p className="text-charcoal-grey">info@indusrivergroup.com</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-indus-blue">Geographic Coverage</h3>
              <p className="text-charcoal-grey">United States & India</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-indus-blue">Response Time</h3>
              <p className="text-charcoal-grey">Within 24-48 hours</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}