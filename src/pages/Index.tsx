
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

  const plannerFeatures = [
    {
      icon: "🎯",
      title: "Goal Setting Worksheets",
      description: "Define clear, measurable goals to keep your business vision focused"
    },
    {
      icon: "📊",
      title: "Market Research Templates",
      description: "Analyze your target market, competitors, and customer personas"
    },
    {
      icon: "💰",
      title: "Budget and Financial Planning",
      description: "Manage your startup costs, forecast revenue, and track expenses"
    },
    {
      icon: "📢",
      title: "Marketing Strategy Planner",
      description: "Map out your advertising campaigns, social media posts, and sales funnels"
    },
    {
      icon: "✅",
      title: "Daily & Weekly To-Do Lists",
      description: "Stay organized with priority tasks and deadlines"
    },
    {
      icon: "📈",
      title: "Progress Trackers",
      description: "Monitor your growth milestones and pivot strategies as needed"
    }
  ];

  const whyChooseUs = [
    {
      title: "Expertise Rooted in Experience",
      description: "Our materials are developed based on real-world entrepreneurial success and failures, giving you insights you won't find elsewhere."
    },
    {
      title: "Tailored for the Tunisian Market", 
      description: "We understand the unique challenges and opportunities within Tunisia and the MENA region."
    },
    {
      title: "Step-by-Step Guidance",
      description: "From absolute beginner to scaling your business, we break down complex concepts into actionable steps."
    },
    {
      title: "Supportive Community",
      description: "Join a growing network of motivated entrepreneurs ready to share advice, feedback, and encouragement."
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
              Welcome to{" "}
              <span className="gradient-text">Tunisian Success Partners</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              At <strong>Tunisian Success Partners</strong>, our mission is to empower aspiring entrepreneurs and ambitious individuals in Tunisia and beyond to build successful businesses from the ground up.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Whether you're just starting out or looking to scale your venture, we provide you with expert knowledge, practical tools, and actionable strategies to help you succeed.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link to="/buy">
                <Button size="lg" className="btn-yellow text-lg px-8 py-4">
                  Get The Business Planner - $4.99
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dropshipping Guide Section */}
      <section className="section-padding bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">1. The Ultimate Guide to Dropshipping</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">Your First Step to Entrepreneurial Freedom</p>
            <p className="text-lg text-gray-400">
              Are you ready to start an online business with minimal upfront investment and no inventory hassle?
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="card-dark p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6">What you'll learn inside:</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1 flex-shrink-0 mt-1">
                    <Check className="text-black w-4 h-4" />
                  </div>
                  <span>How dropshipping works and why it's a perfect startup model for beginners</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1 flex-shrink-0 mt-1">
                    <Check className="text-black w-4 h-4" />
                  </div>
                  <span>Step-by-step setup of your dropshipping store using popular platforms like Shopify and WooCommerce</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1 flex-shrink-0 mt-1">
                    <Check className="text-black w-4 h-4" />
                  </div>
                  <span>How to find trustworthy suppliers and choose winning products that sell</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1 flex-shrink-0 mt-1">
                    <Check className="text-black w-4 h-4" />
                  </div>
                  <span>Practical marketing strategies including social media ads, influencer partnerships, and SEO</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1 flex-shrink-0 mt-1">
                    <Check className="text-black w-4 h-4" />
                  </div>
                  <span>Common pitfalls to avoid and tips to scale your dropshipping business profitably</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 rounded-xl p-8 mb-6">
                <span className="text-6xl">📦</span>
                <h4 className="text-xl font-semibold mt-4 gradient-text">Coming Soon</h4>
                <p className="text-gray-400 mt-2">Ultimate Dropshipping Guide</p>
              </div>
              <p className="text-gray-400">This guide is designed for beginners who want a clear, actionable blueprint to launch their first e-commerce store successfully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Planner Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">2. The Business Planner</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">Organize, Plan, and Grow Your Venture</p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Launching a business requires more than just a great idea — it needs meticulous planning and organization. 
              That's why we created the <span className="gradient-text font-semibold">Business Planner</span> — a comprehensive tool that guides you through every stage of building your enterprise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {plannerFeatures.map((feature, index) => (
              <div key={index} className="card-dark p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              Our planner is <span className="gradient-text font-semibold">digital and printable</span>, so you can use it flexibly whether you prefer pen and paper or working on your laptop.
            </p>
            <Link to="/buy">
              <Button size="lg" className="btn-yellow text-lg px-8 py-4">
                Get Your Business Planner Now - $4.99
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="gradient-text">Tunisian Success Partners?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card-dark p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Business Planner <span className="gradient-text">Benefits</span>
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

      {/* What's Next Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-400/20 to-yellow-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What's <span className="gradient-text">Next?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stay tuned — we're continuously developing more valuable resources like online courses, business templates, and motivational content to help you stay ahead in your entrepreneurial journey.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-yellow text-lg px-8 py-4">
                Subscribe to Our Newsletter
              </Button>
            </Link>
            <Link to="/planner/dashboard">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                Try the Planner Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your <span className="gradient-text">entrepreneurial journey?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful entrepreneurs who've organized their way to success with our Business Planner.
          </p>
          <Link to="/buy">
            <Button size="lg" className="btn-yellow text-lg px-8 py-4">
              Get Started Today - Only $4.99!
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
