'use client';

import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Users, Briefcase, Handshake, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xpwjqqnr");
  const [formData, setFormData] = useState({
    audienceType: '',
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });

  // Auto-reset form after successful submission
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        // Reset form data
        setFormData({
          audienceType: '',
          name: '',
          email: '',
          company: '',
          role: '',
          message: ''
        });
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indus-blue mb-4 sm:mb-6">
            Start a Conversation
          </h1>
          <p className="text-lg sm:text-xl text-charcoal-grey max-w-3xl mx-auto leading-relaxed">
            Whether you're a business owner considering partnership, an investor 
            exploring opportunities, or an intermediary with a quality deal, 
            we'd like to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Business Owners */}
            <div className="bg-white rounded-lg p-6 sm:p-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cerulean rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-indus-blue mb-3 sm:mb-4">
                For Business Owners
              </h3>
              <p className="text-sm sm:text-base text-charcoal-grey mb-4 sm:mb-6 leading-relaxed">
                If you're considering a sale or partnership, we speak your language. 
                Our principals have been owner-operators themselves, so we understand 
                that your business is more than numbers—it's your life's work.
              </p>
              <div className="text-xs sm:text-sm text-warm-grey space-y-1">
                <div className="mb-2">✓ Confidential discussions</div>
                <div className="mb-2">✓ Flexible deal structures</div>
                <div>✓ Respectful process</div>
              </div>
            </div>

            {/* Investors */}
            <div className="bg-white rounded-lg p-6 sm:p-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indus-blue rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-indus-blue mb-3 sm:mb-4">
                For Investors
              </h3>
              <p className="text-sm sm:text-base text-charcoal-grey mb-4 sm:mb-6 leading-relaxed">
                We operate as an independent sponsor, partnering with aligned 
                investors who share our patient capital philosophy and 
                values-driven approach to business building.
              </p>
              <div className="text-xs sm:text-sm text-warm-grey space-y-1">
                <div className="mb-2">✓ Co-investment opportunities</div>
                <div className="mb-2">✓ Curated deal flow</div>
                <div>✓ Aligned interests</div>
              </div>
            </div>

            {/* Intermediaries */}
            <div className="bg-white rounded-lg p-6 sm:p-8 text-center md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-warm-grey rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Handshake className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-indus-blue mb-3 sm:mb-4">
                For Intermediaries
              </h3>
              <p className="text-sm sm:text-base text-charcoal-grey mb-4 sm:mb-6 leading-relaxed">
                We work with investment bankers, business brokers, and other 
                intermediaries who represent quality businesses that fit our 
                criteria and values.
              </p>
              <div className="text-xs sm:text-sm text-warm-grey space-y-1">
                <div className="mb-2">✓ Competitive referral fees</div>
                <div className="mb-2">✓ Reliable execution</div>
                <div>✓ Clear process</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-indus-blue mb-6 sm:mb-8 text-center">
              Get in Touch
            </h2>

            {/* Submit Status Messages */}
            {state.succeeded && (
              <div className="mb-6 p-4 sm:p-6 bg-indus-blue rounded-lg shadow-lg">
                <div className="text-center space-y-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Thank You for Reaching Out
                  </h3>
                  <div className="max-w-lg mx-auto space-y-3">
                    <p className="text-sm sm:text-base text-gray-100">
                      Your message has been received successfully.
                    </p>
                    <p className="text-sm sm:text-base text-gray-200">
                      We'll respond within <span className="text-cerulean font-semibold">24-48 hours</span> with next steps.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {state.errors && state.errors.length > 0 && (
              <div className="mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg flex items-start sm:items-center">
                <AlertCircle className="w-5 h-5 text-warning-orange mr-3" />
                <span className="text-sm sm:text-base text-red-700">Please check the form for errors and try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Audience Type */}
              <div>
                <label htmlFor="audienceType" className="block text-sm sm:text-base font-medium text-charcoal-grey mb-2">
                  I am a... *
                </label>
                <select
                  id="audienceType"
                  name="audienceType"
                  value={formData.audienceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                >
                  <option value="">Please select...</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="Investor">Investor</option>
                  <option value="Intermediary">Intermediary (Broker/Banker)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-charcoal-grey mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-charcoal-grey mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Company and Role Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm sm:text-base font-medium text-charcoal-grey mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm sm:text-base font-medium text-charcoal-grey mb-2">
                    Role/Title
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                    placeholder="Your role or title"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-charcoal-grey mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent resize-vertical"
                  placeholder="Tell us about your business, investment interest, or how we can help..."
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-cerulean text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto"
                >
                  {state.submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-indus-blue text-center mb-8 sm:mb-12">
            Direct Contact
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-indus-blue">Email</h3>
              <p className="text-xs sm:text-sm text-charcoal-grey break-all">info@indusrivergroup.com</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-indus-blue">Geographic Coverage</h3>
              <p className="text-xs sm:text-sm text-charcoal-grey">United States & India</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-indus-blue">Response Time</h3>
              <p className="text-xs sm:text-sm text-charcoal-grey">Within 24-48 hours</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}