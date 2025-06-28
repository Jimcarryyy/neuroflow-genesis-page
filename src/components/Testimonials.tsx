
import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Inc",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "NeuroFlow AI transformed our team's productivity by 300%. The AI-powered scheduling alone saved us 10 hours per week.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Engineering Lead",
      company: "DevCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "The workflow automation features eliminated all our repetitive tasks. Our team can now focus on what truly matters - building great products.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Operations Director",
      company: "Scale Dynamics",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "The predictive insights helped us identify bottlenecks before they became problems. It's like having a crystal ball for productivity.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "As a small team, we needed maximum efficiency. NeuroFlow AI gave us enterprise-level productivity tools that scale with our growth.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/5 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald-400/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of teams who have transformed their productivity with NeuroFlow AI
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="h-24 w-24 text-blue-600" />
            </div>

            {/* Rating */}
            <div className="flex items-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white leading-relaxed mb-8">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white dark:ring-gray-700"
              />
              <div>
                <div className="font-semibold text-gray-900 dark:text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-500 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10,000+", label: "Active Teams" },
            { number: "2M+", label: "Tasks Automated" },
            { number: "40%", label: "Productivity Increase" },
            { number: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
