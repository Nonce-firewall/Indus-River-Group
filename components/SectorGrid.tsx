import { 
  Car, 
  Settings, 
  Heart, 
  Stethoscope, 
  GraduationCap,
  ChefHat,
  FileText,
  Home,
  Recycle,
  Wrench
} from 'lucide-react';

export default function SectorGrid() {
  const sectors = [
    { icon: Car, name: 'Automotive Aftermarket', description: 'Parts, service, and accessories' },
    { icon: Settings, name: 'Niche Manufacturing', description: 'Specialized production and assembly' },
    { icon: Heart, name: 'Senior Living', description: 'Care services and facilities' },
    { icon: Stethoscope, name: 'Healthcare Services', description: 'Medical and wellness services' },
    { icon: Wrench, name: 'MRO Services', description: 'Maintenance, repair, operations' },
    { icon: GraduationCap, name: 'Education & Training', description: 'Professional development services' },
    { icon: ChefHat, name: 'Food Service Equipment', description: 'Commercial kitchen solutions' },
    { icon: FileText, name: 'Business Processing', description: 'Information and data services' },
    { icon: Home, name: 'Real Estate Adjacent', description: 'Property-related services' },
    { icon: Recycle, name: 'Environmental Services', description: 'Waste management and sustainability' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indus-blue mb-6">
            Sectors of Interest
          </h2>
          <p className="text-xl text-charcoal-grey max-w-3xl mx-auto">
            We focus on established businesses in fragmented markets where our operational 
            expertise and patient capital can create meaningful value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 bg-cerulean bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-cerulean" />
                </div>
                <h3 className="font-semibold text-indus-blue mb-2 text-sm">{sector.name}</h3>
                <p className="text-xs text-warm-grey">{sector.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}