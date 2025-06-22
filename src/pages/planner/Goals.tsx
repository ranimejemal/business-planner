
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Plus, Check } from "lucide-react";

interface Goal {
  id: string;
  title: string;
  description: string;
  category: string;
  deadline: string;
  progress: number;
  isCompleted: boolean;
  createdAt: string;
}

const Goals = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Launch new website',
      description: 'Complete redesign and development of company website',
      category: 'Business',
      deadline: '2024-01-15',
      progress: 75,
      isCompleted: false,
      createdAt: '2023-12-01'
    },
    {
      id: '2',
      title: 'Complete online course',
      description: 'Finish the digital marketing certification program',
      category: 'Study',
      deadline: '2024-01-30',
      progress: 40,
      isCompleted: false,
      createdAt: '2023-11-15'
    },
    {
      id: '3',
      title: 'Read 12 books this year',
      description: 'Personal development and business books',
      category: 'Personal',
      deadline: '2024-12-31',
      progress: 100,
      isCompleted: true,
      createdAt: '2023-01-01'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    category: 'Business',
    deadline: ''
  });

  const categories = ['Business', 'Study', 'Personal', 'Health', 'Finance', 'Creativity'];
  const categoryColors = {
    'Business': 'bg-blue-500',
    'Study': 'bg-green-500',
    'Personal': 'bg-purple-500',
    'Health': 'bg-red-500',
    'Finance': 'bg-yellow-500',
    'Creativity': 'bg-pink-500'
  };

  const addGoal = () => {
    if (newGoal.title.trim() && newGoal.deadline) {
      const goal: Goal = {
        id: Date.now().toString(),
        ...newGoal,
        progress: 0,
        isCompleted: false,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setGoals([...goals, goal]);
      setNewGoal({ title: '', description: '', category: 'Business', deadline: '' });
      setShowForm(false);
    }
  };

  const updateProgress = (id: string, newProgress: number) => {
    setGoals(goals.map(goal => 
      goal.id === id 
        ? { ...goal, progress: newProgress, isCompleted: newProgress === 100 }
        : goal
    ));
  };

  const deleteGoal = (id: string) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const getProgressColor = (progress: number) => {
    if (progress === 100) return 'bg-green-500';
    if (progress >= 75) return 'bg-blue-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const motivationalQuotes = [
    "A goal without a plan is just a wish.",
    "Success is the sum of small efforts repeated day in and day out.",
    "The future depends on what you do today.",
    "Your limitation—it's only your imagination.",
    "Don't stop when you're tired. Stop when you're done."
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">
            Goal <span className="gradient-text">Tracker</span>
          </h1>
          <Button 
            onClick={() => setShowForm(!showForm)} 
            className="btn-yellow"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Goal
          </Button>
        </div>

        {/* Add Goal Form */}
        {showForm && (
          <Card className="card-dark mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Create New Goal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Goal Title</label>
                  <Input
                    placeholder="What do you want to achieve?"
                    value={newGoal.title}
                    onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={newGoal.category}
                    onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  placeholder="Describe your goal in detail..."
                  value={newGoal.description}
                  onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Target Deadline</label>
                <Input
                  type="date"
                  value={newGoal.deadline}
                  onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white max-w-xs"
                />
              </div>
              <div className="flex gap-4">
                <Button onClick={addGoal} className="btn-yellow">
                  Create Goal
                </Button>
                <Button 
                  onClick={() => setShowForm(false)} 
                  variant="outline"
                  className="border-gray-700 text-white"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {goals.map((goal) => (
            <Card key={goal.id} className="card-dark hover:scale-105 transition-transform duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold mb-2 flex items-center">
                      {goal.isCompleted && <Check className="w-5 h-5 text-green-400 mr-2" />}
                      {goal.title}
                    </CardTitle>
                    <Badge className={`${categoryColors[goal.category as keyof typeof categoryColors]} text-white text-xs`}>
                      {goal.category}
                    </Badge>
                  </div>
                  <Button
                    onClick={() => deleteGoal(goal.id)}
                    variant="ghost"
                    size="sm"
                    className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">{goal.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-semibold">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Deadline: {new Date(goal.deadline).toLocaleDateString()}</span>
                  <span>{Math.ceil((new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left</span>
                </div>

                {!goal.isCompleted && (
                  <div className="flex gap-2">
                    <Button
                      onClick={() => updateProgress(goal.id, Math.min(goal.progress + 25, 100))}
                      variant="outline"
                      size="sm"
                      className="text-xs border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                    >
                      +25%
                    </Button>
                    <Button
                      onClick={() => updateProgress(goal.id, 100)}
                      variant="outline"
                      size="sm"
                      className="text-xs border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                    >
                      Complete
                    </Button>
                  </div>
                )}

                {goal.isCompleted && (
                  <div className="text-center py-2">
                    <span className="text-green-400 font-semibold">🎉 Goal Completed!</span>
                  </div>
                )}

                <div className="border-t border-gray-700 pt-3">
                  <p className="text-xs text-gray-400 italic">
                    "{motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Goals Summary */}
        <Card className="card-dark">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Goals Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">{goals.length}</div>
                <p className="text-sm text-gray-400">Total Goals</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-green-400">
                  {goals.filter(goal => goal.isCompleted).length}
                </div>
                <p className="text-sm text-gray-400">Completed</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400">
                  {goals.filter(goal => !goal.isCompleted).length}
                </div>
                <p className="text-sm text-gray-400">In Progress</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">
                  {goals.length > 0 ? Math.round((goals.filter(goal => goal.isCompleted).length / goals.length) * 100) : 0}%
                </div>
                <p className="text-sm text-gray-400">Success Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Goals;
