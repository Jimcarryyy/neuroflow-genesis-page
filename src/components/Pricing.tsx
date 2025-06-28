
import { useState } from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      description: "Perfect for individuals and small teams getting started",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        "AI-powered task scheduling",
        "Basic workflow automation",
        "5 team members",
        "10GB storage",
        "Email support",
        "Basic analytics"
      ],
      buttonText: "Start Free Trial",
      isPopular: false
    },
    {
      name: "Professional",
      icon: Crown,
      description: "Ideal for growing teams that need advanced features",
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        "Everything in Starter",
        "Advanced AI insights",
        "Custom workflow builder",
        "25 team members",
        "100GB storage",
        "Priority support",
        "Advanced analytics",
        "API access"
      ],
      buttonText: "Start Free Trial",
      isPopular: true
    },
    {
      name: "Enterprise",
      icon: Rocket,
      description: "For large organizations with complex needs",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "Unlimited storage",
        "Custom integrations",
        "24/7 dedicated support",
        "Advanced security features",
        "Custom onboarding",
        "SLA guarantee"
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !isYearly
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                isYearly
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const savings = isYearly ? Math.round(((plan.monthlyPrice * 12 - plan.yearlyPrice) / (plan.monthlyPrice * 12)) * 100) : 0;

            return (
              <div
                key={index}
                className={`relative group ${
                  plan.isPopular ? 'transform scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`
                  h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl border transition-all duration-300
                  ${plan.isPopular 
                    ? 'border-blue-200 dark:border-blue-700 ring-2 ring-blue-100 dark:ring-blue-900/50' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }
                  hover:shadow-2xl hover:scale-105 group-hover:shadow-2xl
                `}>
                  <div className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className={`
                        w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4
                        ${plan.isPopular 
                          ? 'bg-gradient-to-r from-blue-600 to-emerald-500' 
                          : 'bg-gray-100 dark:bg-gray-700'
                        }
                      `}>
                        <Icon className={`h-8 w-8 ${plan.isPopular ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {plan.name}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">
                          ${price}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 ml-2">
                          /{isYearly ? 'year' : 'month'}
                        </span>
                      </div>
                      
                      {isYearly && savings > 0 && (
                        <div className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
                          Save {savings}% annually
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className={`
                        w-full py-3 transition-all duration-200 hover:scale-105
                        ${plan.isPopular
                          ? 'bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white shadow-lg'
                          : 'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600'
                        }
                      `}
                      variant={plan.isPopular ? "default" : "outline"}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom solution? 
          </p>
          <Button 
            variant="outline" 
            className="border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
