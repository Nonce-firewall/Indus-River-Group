'use client';

import { ArrowRight, TrendingUp, Globe, Clock, Target, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="flex items-center mb-6">
              <img 
                src="/Indus River logo alone.png" 
                alt="Indus River Group" 
                className="h-20 w-20 mr-5" 
              />
              <span className="text-3xl" style={{color: '#FFFFFF', fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: '900'}}>
                INDUS RIVER GROUP
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building Enduring Businesses with{' '}
              <span className="text-cerulean drop-shadow-lg">Integrity</span> and{' '}
              <span className="text-cerulean drop-shadow-lg">Impact</span>
            </h1>
            
            <p className="text-xl text-gray-100 leading-relaxed">
              We specialize in acquiring and scaling established small businesses. 
              With flexible deal structures and an operator-led approach, we help 
              companies reach new heights while honoring their legacy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-cerulean text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 group"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indus-blue transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Right Column - Key Statistics */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
              <div className="w-12 h-12 bg-cerulean bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-cerulean" />
              </div>
              <div className="text-2xl font-bold">$1M–$5M</div>
              <div className="text-sm text-gray-300">EBITDA Range</div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
              <div className="w-12 h-12 bg-cerulean bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-cerulean" />
              </div>
              <div className="text-2xl font-bold">$3.5M–$50M</div>
              <div className="text-sm text-gray-300">Revenue Range</div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
              <div className="w-12 h-12 bg-cerulean bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-cerulean" />
              </div>
              <div className="text-2xl font-bold">Indefinite</div>
              <div className="text-sm text-gray-300">Hold Period</div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
              <div className="w-12 h-12 bg-cerulean bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-cerulean" />
              </div>
              <div className="text-2xl font-bold">US & India</div>
              <div className="text-sm text-gray-300">Geographic Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}