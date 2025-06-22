
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Printables = () => {
  const printables = [
    {
      title: "Daily Planner",
      description: "Beautiful daily layout with time blocks, priorities, and notes section",
      preview: "📅",
      category: "Daily Planning"
    },
    {
      title: "Weekly Overview",
      description: "Comprehensive weekly spread with goal tracking and habit monitoring",
      preview: "📊",
      category: "Weekly Planning"
    },
    {
      title: "Monthly Goals Tracker",
      description: "Visual goal setting and progress tracking for the entire month",
      preview: "🎯",
      category: "Goal Setting"
    },
    {
      title: "Project Planner",
      description: "Detailed project breakdown with milestones and deadlines",
      preview: "📋",
      category: "Project Management"
    },
    {
      title: "Habit Tracker",
      description: "30-day habit tracking grid with motivation quotes",
      preview: "✅",
      category: "Habit Building"
    },
    {
      title: "Financial Planner",
      description: "Budget tracker and expense monitoring sheets",
      preview: "💰",
      category: "Finance"
    },
    {
      title: "Study Schedule",
      description: "Academic planner with study session and exam tracking",
      preview: "📚",
      category: "Education"
    },
    {
      title: "Motivational Quotes",
      description: "Inspiring quote posters for your workspace",
      preview: "✨",
      category: "Motivation"
    }
  ];

  const handleDownload = (title: string) => {
    // This would generate or download the actual PDF
    console.log(`Downloading ${title}...`);
    // For demo purposes, just show an alert
    alert(`PDF download for "${title}" would start here. This feature will be available with the full version!`);
  };

  const categories = [...new Set(printables.map(p => p.category))];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Printable <span className="gradient-text">Templates</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            High-quality PDF downloads for offline planning and organization
          </p>
          <div className="bg-yellow-400 text-black px-6 py-3 rounded-full inline-block">
            <span className="font-semibold">🖨️ Print-Ready • PDF Format • Instant Download</span>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="border-gray-700 text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Printables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {printables.map((printable, index) => (
            <Card key={index} className="card-dark hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{printable.preview}</div>
                <CardTitle className="text-lg font-semibold">{printable.title}</CardTitle>
                <p className="text-xs text-yellow-400 uppercase tracking-wide">
                  {printable.category}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm text-center">
                  {printable.description}
                </p>
                <Button 
                  onClick={() => handleDownload(printable.title)}
                  className="btn-yellow w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="card-dark text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-gray-300">
                Professional-grade PDFs optimized for home and office printing
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-dark text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-semibold mb-2">Multiple Sizes</h3>
              <p className="text-gray-300">
                Available in A4, Letter, and A5 sizes to fit your needs
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-dark text-center">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">♾️</div>
              <h3 className="text-xl font-semibold mb-2">Unlimited Prints</h3>
              <p className="text-gray-300">
                Print as many copies as you need - no restrictions
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Usage Tips */}
        <Card className="card-dark">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              💡 Printing Tips & Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Best Print Settings:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Use high-quality paper (120gsm or higher)</li>
                  <li>• Print in color for best results</li>
                  <li>• Select "Actual Size" in print settings</li>
                  <li>• Use borderless printing if available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Organization Ideas:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Create a dedicated planning binder</li>
                  <li>• Laminate frequently used templates</li>
                  <li>• Use hole punch for easy organization</li>
                  <li>• Mix digital and print for flexibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Printables;
