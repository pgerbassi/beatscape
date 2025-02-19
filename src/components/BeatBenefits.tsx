
import { benefits } from '../constants/beats';
import { BenefitIcons } from './BenefitIcons';

export const BeatBenefits = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Why Choose Our <span className="text-electric-gold">Beats</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => {
          const IconComponent = BenefitIcons[benefit.iconName];
          return (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-hero-light to-hero-dark border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-electric-gold/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 rounded-lg bg-hero-dark/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <IconComponent />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white text-center">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-400 text-center text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
