
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarIcon, Plus, Check } from "lucide-react";

interface Task {
  id: string;
  text: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
  timeBlock: 'Morning' | 'Afternoon' | 'Evening';
}

const Daily = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [newTask, setNewTask] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
  const [newTaskTimeBlock, setNewTaskTimeBlock] = useState<'Morning' | 'Afternoon' | 'Evening'>('Morning');
  const [notes, setNotes] = useState('');
  
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      text: 'Review marketing strategy',
      completed: true,
      priority: 'High',
      timeBlock: 'Morning'
    },
    {
      id: '2', 
      text: 'Prepare presentation slides',
      completed: false,
      priority: 'High',
      timeBlock: 'Afternoon'
    },
    {
      id: '3',
      text: 'Team check-in meeting',
      completed: false,
      priority: 'Medium',
      timeBlock: 'Afternoon'
    }
  ]);

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask,
        completed: false,
        priority: newTaskPriority,
        timeBlock: newTaskTimeBlock
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getTimeBlockTasks = (timeBlock: string) => {
    return tasks.filter(task => task.timeBlock === timeBlock);
  };

  const timeBlocks = ['Morning', 'Afternoon', 'Evening'];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">
            Daily <span className="gradient-text">Planner</span>
          </h1>
          <div className="flex items-center space-x-4">
            <CalendarIcon className="w-5 h-5 text-yellow-400" />
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>
        </div>

        {/* Add New Task */}
        <Card className="card-dark mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Add New Task</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="What needs to be done?"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="flex-1 bg-gray-800 border-gray-700 text-white"
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
              />
              <select
                value={newTaskPriority}
                onChange={(e) => setNewTaskPriority(e.target.value as 'High' | 'Medium' | 'Low')}
                className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
              >
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
              <select
                value={newTaskTimeBlock}
                onChange={(e) => setNewTaskTimeBlock(e.target.value as 'Morning' | 'Afternoon' | 'Evening')}
                className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
              >
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
              <Button onClick={addTask} className="btn-yellow">
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Time Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {timeBlocks.map((timeBlock) => (
            <Card key={timeBlock} className="card-dark">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-yellow-400">
                  {timeBlock}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {getTimeBlockTasks(timeBlock).map((task) => (
                    <div
                      key={task.id}
                      className={`p-3 rounded-lg border ${
                        task.completed 
                          ? 'bg-green-900/20 border-green-500/30' 
                          : 'bg-gray-800/50 border-gray-700'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          checked={task.completed}
                          onCheckedChange={() => toggleTask(task.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`text-sm ${task.completed ? 'line-through text-gray-400' : ''}`}>
                              {task.text}
                            </span>
                            <Badge className={`${getPriorityColor(task.priority)} text-white text-xs`}>
                              {task.priority}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          onClick={() => deleteTask(task.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                        >
                          ×
                        </Button>
                      </div>
                    </div>
                  ))}
                  {getTimeBlockTasks(timeBlock).length === 0 && (
                    <p className="text-gray-400 text-center py-4">No tasks for {timeBlock.toLowerCase()}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notes Section */}
        <Card className="card-dark">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Daily Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Capture your thoughts, insights, or reflections for the day..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Daily;
