'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Users, Briefcase, Handshake } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    audienceType: 'business-owner'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // In production, this would send to your backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Business Owners */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-cerulean bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-cerulean" />
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
              <div className="w-16 h-16 bg-indus-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-indus-blue" />
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
              <div className="w-16 h-16 bg-warm-grey bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-warm-grey" />
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

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-indus-blue mb-8 text-center">
              Get in Touch
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Audience Type */}
              <div>
                <label className="block text-sm font-medium text-charcoal-grey mb-2">
                  I am a... *
                </label>
                <select
                  name="audienceType"
                  value={formData.audienceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                >
                  <option value="business-owner">Business Owner</option>
                  <option value="investor">Investor</option>
                  <option value="intermediary">Intermediary/Advisor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-grey mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-grey mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                  />
                </div>
              </div>

              {/* Company and Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal-grey mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-grey mb-2">
                    Role/Title
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-charcoal-grey mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Please tell us about your business, investment interest, or how we might work together..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indus-blue text-center mb-12">
            Direct Contact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-cerulean bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-cerulean" />
              </div>
              <h3 className="font-semibold text-indus-blue">Email</h3>
              <p className="text-charcoal-grey">info@indusrivergroup.com</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-cerulean bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-cerulean" />
              </div>
              <h3 className="font-semibold text-indus-blue">Geographic Coverage</h3>
              <p className="text-charcoal-grey">United States & India</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-cerulean bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-cerulean" />
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