
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Calendar, User, Settings, Home } from "lucide-react";

const Index = () => {
  const benefits = [
    "Crystal Clear Organisation",
    "Beginner-Friendly Design", 
    "Track Your Progress Like a Pro",
    "Bonus Printable Trackers",
    "Boost Productivity & Motivation",
    "Perfect for Exams, Projects & Planning"
  ];

  const features = [
    {
      icon: "💻",
      title: "Digital planner for desktop/mobile",
      description: "Access anywhere, anytime"
    },
    {
      icon: "📅",
      title: "Daily, weekly, monthly task views",
      description: "Complete planning system"
    },
    {
      icon: "⏱️",
      title: "Study or business session tracker",
      description: "Monitor your productivity"
    },
    {
      icon: "📊",
      title: "Goals & productivity dashboard",
      description: "Visual progress tracking"
    },
    {
      icon: "🖨️",
      title: "Printable pages",
      description: "Physical backup options"
    },
    {
      icon: "💎",
      title: "One-time purchase – no subscription",
      description: "Own it forever"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              The Ultimate{" "}
              <span className="gradient-text">Business Planner</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your Secret Weapon to Staying Organised, Productive & On Track!
            </p>
            <div className="bg-yellow-400 text-black px-6 py-3 rounded-full inline-block mb-8 pulse-glow">
              <span className="font-bold text-lg">🔥 50% OFF – Now $4.99 Only!</span>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link to="/buy">
                <Button size="lg" className="btn-yellow text-lg px-8 py-4">
                  Buy Now - Transform Your Business Life
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mockup Image Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl card-dark">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-800 rounded-xl p-6 aspect-video flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Desktop Preview</span>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 aspect-[9/16] max-w-sm mx-auto flex items-center justify-center">
                  <span className="text-gray-400">Mobile Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose Our <span className="gradient-text">Business Planner?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 card-dark">
                <div className="bg-yellow-400 rounded-full p-2 flex-shrink-0">
                  <Check className="text-black w-5 h-5" />
                </div>
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What's <span className="gradient-text">Inside</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-dark p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Banner */}
      <section className="section-padding bg-gradient-to-r from-yellow-400/20 to-yellow-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic text-white mb-4">
            "Let's turn your chaos into clarity, one tracker at a time."
          </blockquote>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your <span className="gradient-text">business life?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful entrepreneurs who've organized their way to success.
          </p>
          <Link to="/buy">
            <Button size="lg" className="btn-yellow text-lg px-8 py-4">
              Buy Now for $4.99 - Start Today!
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
