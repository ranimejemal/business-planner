
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Check, User, Settings } from "lucide-react";

const Features = () => {
  const featureCategories = [
    {
      title: "Tracking & Organization",
      icon: "📊",
      features: [
        {
          name: "Daily Task Management",
          description: "Plan your day with time-blocked tasks, priority levels, and completion tracking."
        },
        {
          name: "Weekly Overview",
          description: "See your entire week at a glance with drag-and-drop task management."
        },
        {
          name: "Monthly Planning",
          description: "Set monthly goals and track progress with visual indicators."
        },
        {
          name: "Study/Work Sessions",
          description: "Track time spent on projects with detailed analytics and insights."
        }
      ]
    },
    {
      title: "Goals & Progress",
      icon: "🎯",
      features: [
        {
          name: "SMART Goal Setting",
          description: "Create specific, measurable goals with deadlines and category tags."
        },
        {
          name: "Progress Visualization",
          description: "Watch your progress with beautiful charts and completion percentages."
        },
        {
          name: "Milestone Tracking",
          description: "Break down big goals into manageable milestones and celebrate wins."
        },
        {
          name: "Habit Building",
          description: "Build lasting habits with streak tracking and motivation systems."
        }
      ]
    },
    {
      title: "PDF Printables",
      icon: "🖨️",
      features: [
        {
          name: "Daily Planner Pages",
          description: "Beautiful printable daily layouts for offline planning."
        },
        {
          name: "Weekly Spreads",
          description: "Comprehensive weekly templates for complete planning."
        },
        {
          name: "Goal Tracker Sheets",
          description: "Physical goal tracking pages for vision boards and journals."
        },
        {
          name: "Motivational Quotes",
          description: "Inspiring quote posters to keep you motivated every day."
        }
      ]
    },
    {
      title: "Dashboard & Analytics",
      icon: "📈",
      features: [
        {
          name: "Personal Dashboard",
          description: "Your productivity command center with all key metrics at a glance."
        },
        {
          name: "Productivity Insights",
          description: "Discover your peak performance times and optimize your schedule."
        },
        {
          name: "Weekly Reports",
          description: "Automated reports showing your accomplishments and areas for improvement."
        },
        {
          name: "Goal Achievement Stats",
          description: "Track your success rate and celebrate your achievements."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="section-padding text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Everything You Need to <span className="gradient-text">Succeed</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Our Business Planner is packed with powerful features designed to help you 
          organize your life, boost productivity, and achieve your biggest goals.
        </p>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-16">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="text-3xl font-bold gradient-text">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className="card-dark hover:scale-105 transition-transform duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-yellow-400">
                        {feature.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots/Demo Section */}
      <section className="section-padding bg-gray-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            See It In <span className="gradient-text">Action</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-dark">
              <CardHeader>
                <CardTitle>Desktop Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
                  <span className="text-gray-400">Dashboard Screenshot</span>
                </div>
                <p className="text-gray-300 mt-4">
                  Full-featured desktop interface with drag-and-drop functionality
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-dark">
              <CardHeader>
                <CardTitle>Mobile Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-800 rounded-lg aspect-[9/16] max-w-sm mx-auto flex items-center justify-center">
                  <span className="text-gray-400">Mobile Screenshot</span>
                </div>
                <p className="text-gray-300 mt-4">
                  Responsive design that works perfectly on all devices
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful people who've transformed their productivity.
          </p>
          <Link to="/buy">
            <Button size="lg" className="btn-yellow text-lg px-8 py-4">
              Get Your Planner Now - $4.99
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;
