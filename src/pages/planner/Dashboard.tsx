
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Check, User, Home } from "lucide-react";

const Dashboard = () => {
  const [userName] = useState("Entrepreneur"); // Could be dynamic later
  const [todaysTasks] = useState(5);
  const [completedTasks] = useState(3);
  const [weeklyGoals] = useState(8);

  const motivationalQuotes = [
    "Plan it. Do it. Achieve it.",
    "Success is where preparation meets opportunity.",
    "Your dreams don't work unless you do.",
    "Progress, not perfection.",
    "Every expert was once a beginner."
  ];

  const [currentQuote, setCurrentQuote] = useState(motivationalQuotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);
    }, 30000); // Change quote every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const quickActions = [
    { title: "Daily Tasks", href: "/planner/daily", icon: Calendar, color: "bg-blue-500" },
    { title: "Weekly Overview", href: "/planner/weekly", icon: Calendar, color: "bg-green-500" },
    { title: "Goals Tracker", href: "/planner/goals", icon: Check, color: "bg-purple-500" },
    { title: "Study Sessions", href: "/planner/study-tracker", icon: User, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back, <span className="gradient-text">{userName}</span>! ✨
          </h1>
          <p className="text-gray-400 text-lg">Ready to conquer your goals today?</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-dark">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">📅 Today's Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">{todaysTasks}</div>
              <p className="text-xs text-gray-400">tasks scheduled</p>
            </CardContent>
          </Card>

          <Card className="card-dark">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">🗓️ This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">{weeklyGoals}</div>
              <p className="text-xs text-gray-400">goals to complete</p>
            </CardContent>
          </Card>

          <Card className="card-dark">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">✅ Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-400">{completedTasks}</div>
              <p className="text-xs text-gray-400">tasks done today</p>
            </CardContent>
          </Card>

          <Card className="card-dark">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">📈 Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-400">{Math.round((completedTasks / todaysTasks) * 100)}%</div>
              <p className="text-xs text-gray-400">completion rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Motivational Quote */}
        <div className="mb-8">
          <Card className="card-dark border-yellow-400/30">
            <CardContent className="p-6 text-center">
              <blockquote className="text-xl font-light italic text-yellow-400 mb-2">
                "{currentQuote}"
              </blockquote>
              <div className="w-16 h-0.5 bg-yellow-400 mx-auto"></div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.href}>
              <Card className="card-dark hover:scale-105 transition-transform duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{action.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="card-dark">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Completed "Review marketing strategy"</span>
                <span className="text-xs text-gray-400 ml-auto">2 hours ago</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Started "Prepare presentation slides"</span>
                <span className="text-xs text-gray-400 ml-auto">4 hours ago</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm">Added new goal: "Launch website"</span>
                <span className="text-xs text-gray-400 ml-auto">Yesterday</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
