
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Content */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Ahead of the AI Revolution
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get exclusive insights, productivity tips, and early access to new features. 
            Join 50,000+ professionals already transforming their workflow.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-white/40 backdrop-blur-sm h-12"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-blue-600 hover:bg-blue-50 h-12 px-8 font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-emerald-300" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Welcome to the Community!
              </h3>
              <p className="text-blue-100">
                Check your inbox for a confirmation email and your first productivity insight.
              </p>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-blue-200 text-sm">
          <p>
            ✨ No spam, ever. Unsubscribe with one click. 
            <br />
            🔒 Your email is safe with enterprise-grade security.
          </p>
        </div>

        {/* Latest Blog Teaser */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="text-left max-w-2xl mx-auto">
            <div className="text-blue-200 text-sm font-medium mb-2">LATEST BLOG POST</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              "10 AI Productivity Hacks That Will Change How You Work"
            </h3>
            <p className="text-blue-100 mb-6">
              Discover the secret techniques top performers use to leverage AI for maximum productivity. 
              Learn how to automate your workflow and reclaim 15+ hours per week.
            </p>
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:scale-105"
            >
              Read More →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
