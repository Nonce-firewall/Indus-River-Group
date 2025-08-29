import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import IndusRiverLogo from './IndusRiverLogo';

export default function Footer() {
  return (
    <footer className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-3 sm:mb-4">
              <div className="flex items-center">
                <img 
                  src="/Indus%20River%20logo%20alone.png" 
                  alt="Indus River Group" 
                  className="h-10 w-10 sm:h-12 sm:w-12 mr-3 sm:mr-4" 
                />
                <span className="text-lg sm:text-xl text-white leading-tight" style={{fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: '900'}}>
                <span className="text-lg sm:text-xl text-white leading-tight font-black">
                  INDUS RIVER
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Building enduring businesses with integrity and impact through patient stewardship 
              and flexible partnership structures.
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                <span className="text-gray-300 break-all">info@indusrivergroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                <span className="text-gray-300">United States & India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 sm:col-span-1">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <Link href="/about" className="block text-gray-300 hover:text-cerulean transition-colors leading-relaxed">
                About Us
              </Link>
              <Link href="/approach" className="block text-gray-300 hover:text-cerulean transition-colors leading-relaxed">
                Investment Approach
              </Link>
              <Link href="/team" className="block text-gray-300 hover:text-cerulean transition-colors leading-relaxed">
                Team
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cerulean transition-colors leading-relaxed">
                Contact
              </Link>
            </div>
          </div>

          {/* Investment Focus */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Investment Focus</h3>
            <div className="text-xs sm:text-sm text-gray-300 space-y-2">
              <div>EBITDA: $1M–$5M</div>
              <div>Revenue: $3.5M–$50M</div>
              <div>Hold Period: Indefinite</div>
              <div>Geographic Focus: North America & India</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Indus River Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
  )
}