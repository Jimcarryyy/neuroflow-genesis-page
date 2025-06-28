
import { useState } from 'react';
import { Brain, Zap, Target, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our AI analyzes your workflow patterns and identifies optimization opportunities",
      details: "Advanced machine learning algorithms study your team's productivity patterns, communication flows, and task dependencies to create a comprehensive productivity profile."
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Automatically streamline repetitive tasks and processes",
      details: "Intelligent automation engines handle routine work, schedule optimization, and seamless integration with your existing tools to eliminate manual overhead."
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Focus your team's energy on high-impact activities",
      details: "AI-driven prioritization ensures your team works on the most valuable tasks while automated systems handle everything else in the background."
    },
    {
      icon: Rocket,
      title: "Accelerated Growth",
      description: "Watch productivity soar with measurable results",
      details: "Real-time analytics and performance insights show tangible improvements in team efficiency, project completion rates, and overall business outcomes."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-emerald-50/50 dark:from-blue-900/10 dark:to-emerald-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform your workflow in four simple steps with AI-powered intelligence
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = hoveredStep === index;
            
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Connection Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-30 z-0" />
                )}

                {/* Step Card */}
                <div className={`
                  relative z-10 bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                  transition-all duration-500 transform hover:scale-105 border border-gray-200 dark:border-gray-700
                  ${isHovered ? 'ring-2 ring-blue-400 dark:ring-blue-500' : ''}
                `}>
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`
                    w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center
                    bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30
                    transition-all duration-300 group-hover:scale-110
                  `}>
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className={`
                      text-gray-600 dark:text-gray-300 transition-all duration-300
                      ${isHovered ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'}
                    `}>
                      {step.description}
                    </p>

                    {/* Expanded Details on Hover */}
                    <p className={`
                      text-sm text-gray-500 dark:text-gray-400 absolute inset-x-4 top-24
                      transition-all duration-300
                      ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'}
                    `}>
                      {step.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to revolutionize your workflow?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
