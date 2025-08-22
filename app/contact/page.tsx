'use client';

import { useState, useRef } from 'react';
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

  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isDragOver, setIsDragOver] = useState(false);
  const [submitProgress, setSubmitProgress] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    setSubmitProgress('Preparing your message...');

    try {
      const formDataWithFiles = new FormData();
      
      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithFiles.append(key, value);
      });
      
      // Add files
      attachedFiles.forEach((file, index) => {
        formDataWithFiles.append(`attachment_${index}`, file);
      });

      setSubmitProgress('Sending your message...');
      
      // Add timeout to the fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 second timeout
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataWithFiles,
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you for your message. We will get back to you within 24-48 hours.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          message: '',
          audienceType: 'business-owner'
        });
        setAttachedFiles([]);
      } else if (response.status === 202) {
        // Partial success - form logged but email failed
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // Reset form since it was logged
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          message: '',
          audienceType: 'business-owner'
        });
        setAttachedFiles([]);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        setSubmitStatus({
          type: 'error',
          message: 'Request timed out. Your message has been logged locally. Please email us directly at info@indusrivergroup.com if urgent.'
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please email us directly at info@indusrivergroup.com'
        });
      }
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      setSubmitProgress('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      // Limit file size to 10MB
      if (file.size > 10 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: `File "${file.name}" is too large. Maximum size is 10MB.`
        });
        return false;
      }
      return true;
    });
    
    setAttachedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter(file => {
      // Limit file size to 10MB
      if (file.size > 10 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: `File "${file.name}" is too large. Maximum size is 10MB.`
        });
        return false;
      }
      return true;
    });
    
    setAttachedFiles(prev => [...prev, ...validFiles]);
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

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-indus-blue mb-8 text-center">
              Get in Touch
            </h2>
            
            {/* Important Notice */}
            <div className="mb-8 p-4 bg-indus-blue bg-opacity-5 border border-indus-blue border-opacity-20 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-white mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white mb-1">
                    Multiple Ways to Reach Us
                  </h3>
                  <p className="text-sm text-white">
                    For fastest response, email us directly at <strong>info@indusrivergroup.com</strong>. 
                    You can also use this form - all submissions are logged and we'll respond within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Status Messages */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

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

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-charcoal-grey mb-2">
                  Attachments (Optional)
                </label>
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-full">
                    <label 
                      className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                        isDragOver 
                          ? 'border-cerulean bg-blue-50 border-solid' 
                          : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className={`mb-2 text-sm ${isDragOver ? 'text-cerulean font-medium' : 'text-gray-500'}`}>
                          <span className="font-semibold">
                            {isDragOver ? 'Drop files here' : 'Click to upload'}
                          </span> 
                          {!isDragOver && ' or drag and drop'}
                        </p>
                        <p className={`text-xs ${isDragOver ? 'text-cerulean' : 'text-gray-500'}`}>
                          PDF, DOC, DOCX, XLS, XLSX (MAX. 10MB each)
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        multiple
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.png,.jpg,.jpeg"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  
                  {/* Display attached files */}
                  {attachedFiles.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-charcoal-grey">Attached Files:</p>
                      {attachedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <div>
                              <p className="text-sm font-medium text-charcoal-grey">{file.name}</p>
                              <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-xs text-gray-500">
                    You can attach business summaries, financial statements, or other relevant documents to help us better understand your inquiry.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (submitProgress || 'Sending...') : 'Send Message'}
                </button>
                {isSubmitting && (
                  <p className="text-sm text-gray-500 mt-2">
                    This may take a few moments...
                  </p>
                )}
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