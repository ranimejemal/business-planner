
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar as CalendarIcon } from "lucide-react";

interface WeeklyTask {
  id: string;
  text: string;
  day: string;
  completed: boolean;
  recurring: boolean;
}

const Weekly = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [newTask, setNewTask] = useState('');
  const [selectedDay, setSelectedDay] = useState('Monday');
  
  const [weeklyTasks, setWeeklyTasks] = useState<WeeklyTask[]>([
    {
      id: '1',
      text: 'Team standup meeting',
      day: 'Monday',
      completed: false,
      recurring: true
    },
    {
      id: '2',
      text: 'Review weekly metrics',
      day: 'Friday',
      completed: false,
      recurring: true
    },
    {
      id: '3',
      text: 'Client presentation prep',
      day: 'Wednesday',
      completed: false,
      recurring: false
    }
  ]);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const getWeekDates = () => {
    const startOfWeek = new Date(currentWeek);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
    startOfWeek.setDate(diff);

    return daysOfWeek.map((_, index) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + index);
      return date;
    });
  };

  const addTask = () => {
    if (newTask.trim()) {
      const task: WeeklyTask = {
        id: Date.now().toString(),
        text: newTask,
        day: selectedDay,
        completed: false,
        recurring: false
      };
      setWeeklyTasks([...weeklyTasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id: string) => {
    setWeeklyTasks(weeklyTasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getTasksForDay = (day: string) => {
    return weeklyTasks.filter(task => task.day === day);
  };

  const weekDates = getWeekDates();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">
            Weekly <span className="gradient-text">Overview</span>
          </h1>
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => {
                const prevWeek = new Date(currentWeek);
                prevWeek.setDate(prevWeek.getDate() - 7);
                setCurrentWeek(prevWeek);
              }}
              variant="outline"
              className="border-gray-700 text-white"
            >
              ← Previous
            </Button>
            <span className="text-lg font-medium">
              {weekDates[0].toLocaleDateString()} - {weekDates[6].toLocaleDateString()}
            </span>
            <Button
              onClick={() => {
                const nextWeek = new Date(currentWeek);
                nextWeek.setDate(nextWeek.getDate() + 7);
                setCurrentWeek(nextWeek);
              }}
              variant="outline"
              className="border-gray-700 text-white"
            >
              Next →
            </Button>
          </div>
        </div>

        {/* Add New Task */}
        <Card className="card-dark mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Add Weekly Task</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="What needs to be done this week?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 bg-gray-800 border-gray-700 text-white"
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
            />
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
            >
              {daysOfWeek.map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <Button onClick={addTask} className="btn-yellow">
              <Plus className="w-4 h-4 mr-2" />
              Add
            </Button>
          </CardContent>
        </Card>

        {/* Weekly Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {daysOfWeek.map((day, index) => {
            const dayTasks = getTasksForDay(day);
            const date = weekDates[index];
            const isToday = date.toDateString() === new Date().toDateString();
            
            return (
              <Card 
                key={day} 
                className={`card-dark ${isToday ? 'border-yellow-400 border-2' : ''}`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <span className={`text-lg ${isToday ? 'text-yellow-400' : ''}`}>
                      {day}
                    </span>
                    {isToday && (
                      <Badge className="bg-yellow-400 text-black text-xs">
                        Today
                      </Badge>
                    )}
                  </CardTitle>
                  <p className="text-sm text-gray-400">
                    {date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dayTasks.map((task) => (
                      <div
                        key={task.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          task.completed 
                            ? 'bg-green-900/20 border-green-500/30' 
                            : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => toggleTask(task.id)}
                      >
                        <div className="flex items-start justify-between">
                          <span className={`text-sm ${task.completed ? 'line-through text-gray-400' : ''}`}>
                            {task.text}
                          </span>
                          {task.recurring && (
                            <Badge variant="outline" className="text-xs border-blue-400 text-blue-400">
                              Recurring
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                    {dayTasks.length === 0 && (
                      <p className="text-gray-500 text-sm text-center py-4">
                        No tasks scheduled
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Weekly Summary */}
        <Card className="card-dark mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Weekly Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">
                  {weeklyTasks.length}
                </div>
                <p className="text-sm text-gray-400">Total Tasks</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-green-400">
                  {weeklyTasks.filter(task => task.completed).length}
                </div>
                <p className="text-sm text-gray-400">Completed</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400">
                  {weeklyTasks.length > 0 ? Math.round((weeklyTasks.filter(task => task.completed).length / weeklyTasks.length) * 100) : 0}%
                </div>
                <p className="text-sm text-gray-400">Completion Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Weekly;
