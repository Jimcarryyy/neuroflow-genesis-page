
import { useState } from 'react';
import { Calendar, MessageSquare, Workflow, BarChart3, Shield, Sparkles } from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered calendar optimization that finds the perfect meeting times and maximizes focus blocks.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
    },
    {
      icon: MessageSquare,
      title: "AI-Powered Notes",
      description: "Intelligent note-taking that captures, organizes, and surfaces key insights automatically.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20"
    },
    {
      icon: Workflow,
      title: "Context Switching Eliminator",
      description: "Seamlessly manage multiple projects without losing focus or momentum.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20"
    },
    {
      icon: BarChart3,
      title: "Workflow Automator",
      description: "Automate repetitive tasks and create intelligent workflows that adapt to your needs.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance certifications.",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20"
    },
    {
      icon: Sparkles,
      title: "Predictive Insights",
      description: "AI analytics that predict bottlenecks and suggest optimizations before they happen.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to supercharge your productivity and streamline your workflow
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredFeature === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Glassmorphism Card */}
                <div className={`
                  relative h-full p-8 rounded-2xl backdrop-blur-lg border border-white/20 dark:border-gray-700/30
                  bg-gradient-to-br ${feature.bgColor}
                  shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105
                  ${isHovered ? 'ring-2 ring-white/50 dark:ring-gray-600/50' : ''}
                `}>
                  {/* Background Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 
                    group-hover:opacity-5 transition-opacity duration-500
                  `} />

                  {/* Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} 
                    flex items-center justify-center mb-6 
                    transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                  `}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect - Learn More Link */}
                  <div className={`
                    mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  `}>
                    <a 
                      href="#" 
                      className={`
                        inline-flex items-center text-sm font-medium 
                        bg-gradient-to-r ${feature.color} bg-clip-text text-transparent
                        hover:underline
                      `}
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 border border-blue-200/50 dark:border-blue-700/50">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              And many more features coming soon...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
