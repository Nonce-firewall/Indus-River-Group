import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import IndusRiverLogo from './IndusRiverLogo';

export default function Footer() {
  return (
    <footer className="bg-warm-grey text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="mb-4">
              <div className="flex items-center">
                <img 
                  src="/Indus River logo alone.png" 
                  alt="Indus River Group" 
                  className="h-12 w-12 mr-4" 
                />
                <span className="text-xl text-white" style={{fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: '900'}}>
                  INDUS RIVER
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Building enduring businesses with integrity and impact through patient stewardship 
              and flexible partnership structures.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cerulean" />
                <span className="text-gray-300">info@indusrivergroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cerulean" />
                <span className="text-gray-300">United States & India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-cerulean transition-colors">
                About Us
              </Link>
              <Link href="/approach" className="block text-gray-300 hover:text-cerulean transition-colors">
                Investment Approach
              </Link>
              <Link href="/team" className="block text-gray-300 hover:text-cerulean transition-colors">
                Team
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-cerulean transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Investment Focus */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Investment Focus</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <div>EBITDA: $1M–$5M</div>
              <div>Revenue: $3.5M–$50M</div>
              <div>Hold Period: Indefinite</div>
              <div>Geographic Focus: North America & India</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Indus River Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}