
import { useState } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Screenshots = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const screenshots = [
    {
      title: "AI Dashboard",
      description: "Get instant insights into your productivity patterns and optimization opportunities",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    },
    {
      title: "Smart Calendar",
      description: "Intelligent scheduling that maximizes your focus time and minimizes context switching",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
    },
    {
      title: "Workflow Automation",
      description: "Visual workflow builder that connects all your tools and automates repetitive tasks",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
    },
    {
      title: "Team Analytics",
      description: "Comprehensive team performance insights with actionable recommendations",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            See It in <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the power of AI-driven productivity through our intuitive interface
          </p>
          
          <Button 
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white px-8 py-3 text-lg group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Live Demo
          </Button>
        </div>

        {/* Screenshot Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-gray-800">
            {/* Browser Bar */}
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white dark:bg-gray-600 rounded px-3 py-1 text-sm text-gray-600 dark:text-gray-300">
                  app.neuroflow.ai/{screenshots[currentImage].title.toLowerCase().replace(' ', '-')}
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative aspect-video">
              <img
                src={screenshots[currentImage].image}
                alt={screenshots[currentImage].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-200"
              >
                <ArrowLeft className="h-6 w-6 text-white" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-200"
              >
                <ArrowRight className="h-6 w-6 text-white" />
              </button>

              {/* Content Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{screenshots[currentImage].title}</h3>
                <p className="text-gray-200">{screenshots[currentImage].description}</p>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentImage 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-md mx-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Live Demo Coming Soon!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're preparing an interactive demo that will showcase all the powerful features of NeuroFlow AI. Get notified when it's ready!
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={() => setShowModal(false)}
                variant="outline"
                className="flex-1"
              >
                Close
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-500"
              >
                Notify Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Screenshots;
