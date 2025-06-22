
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, User, Calendar } from "lucide-react";

interface Session {
  id: string;
  subject: string;
  timeSpent: number; // in minutes
  notes: string;
  date: string;
  category: string;
}

const StudyTracker = () => {
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: '1',
      subject: 'Digital Marketing Strategy',
      timeSpent: 120,
      notes: 'Covered social media advertising and content planning',
      date: '2024-01-08',
      category: 'Business'
    },
    {
      id: '2',
      subject: 'Financial Planning',
      timeSpent: 90,
      notes: 'Reviewed quarterly budget and investment options',
      date: '2024-01-07',
      category: 'Finance'
    },
    {
      id: '3',
      subject: 'Team Leadership',
      timeSpent: 60,
      notes: 'Read about effective communication strategies',
      date: '2024-01-06',
      category: 'Personal Development'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newSession, setNewSession] = useState({
    subject: '',
    timeSpent: '',
    notes: '',
    category: 'Business'
  });

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [currentSubject, setCurrentSubject] = useState('');

  const categories = ['Business', 'Finance', 'Personal Development', 'Technology', 'Creative', 'Health'];
  const categoryColors = {
    'Business': 'bg-blue-500',
    'Finance': 'bg-green-500',
    'Personal Development': 'bg-purple-500',
    'Technology': 'bg-cyan-500',
    'Creative': 'bg-pink-500',
    'Health': 'bg-red-500'
  };

  const addSession = () => {
    if (newSession.subject.trim() && newSession.timeSpent) {
      const session: Session = {
        id: Date.now().toString(),
        subject: newSession.subject,
        timeSpent: parseInt(newSession.timeSpent),
        notes: newSession.notes,
        date: new Date().toISOString().split('T')[0],
        category: newSession.category
      };
      setSessions([session, ...sessions]);
      setNewSession({ subject: '', timeSpent: '', notes: '', category: 'Business' });
      setShowForm(false);
    }
  };

  const deleteSession = (id: string) => {
    setSessions(sessions.filter(session => session.id !== id));
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getTotalTimeByCategory = () => {
    const categoryTotals: { [key: string]: number } = {};
    sessions.forEach(session => {
      categoryTotals[session.category] = (categoryTotals[session.category] || 0) + session.timeSpent;
    });
    return categoryTotals;
  };

  const getTotalTime = () => {
    return sessions.reduce((total, session) => total + session.timeSpent, 0);
  };

  const getWeeklyTime = () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    return sessions
      .filter(session => new Date(session.date) >= oneWeekAgo)
      .reduce((total, session) => total + session.timeSpent, 0);
  };

  const categoryTotals = getTotalTimeByCategory();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">
            Study & Work <span className="gradient-text">Tracker</span>
          </h1>
          <Button 
            onClick={() => setShowForm(!showForm)} 
            className="btn-yellow"
          >
            <Plus className="w-4 h-4 mr-2" />
            Log Session
          </Button>
        </div>

        {/* Timer Section */}
        <Card className="card-dark mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Session Timer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium mb-2">What are you working on?</label>
                <Input
                  placeholder="Subject or project name"
                  value={currentSubject}
                  onChange={(e) => setCurrentSubject(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {formatTime(timerMinutes)}
                </div>
                <p className="text-sm text-gray-400">Active session time</p>
              </div>
              <div>
                <Button
                  onClick={() => {
                    if (isTimerRunning) {
                      setIsTimerRunning(false);
                      if (timerMinutes > 0 && currentSubject.trim()) {
                        // Auto-save session when stopping timer
                        const session: Session = {
                          id: Date.now().toString(),
                          subject: currentSubject,
                          timeSpent: timerMinutes,
                          notes: '',
                          date: new Date().toISOString().split('T')[0],
                          category: 'Business'
                        };
                        setSessions([session, ...sessions]);
                        setTimerMinutes(0);
                        setCurrentSubject('');
                      }
                    } else {
                      setIsTimerRunning(true);
                      // Start timer interval
                      const interval = setInterval(() => {
                        setTimerMinutes(prev => prev + 1);
                      }, 60000); // Update every minute
                    }
                  }}
                  className={isTimerRunning ? "bg-red-500 hover:bg-red-600" : "btn-yellow"}
                  disabled={!currentSubject.trim() && !isTimerRunning}
                >
                  {isTimerRunning ? 'Stop & Save' : 'Start Timer'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Add Session Form */}
        {showForm && (
          <Card className="card-dark mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Log Study/Work Session</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Subject/Project</label>
                  <Input
                    placeholder="What did you work on?"
                    value={newSession.subject}
                    onChange={(e) => setNewSession({ ...newSession, subject: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Time Spent (minutes)</label>
                  <Input
                    type="number"
                    placeholder="60"
                    value={newSession.timeSpent}
                    onChange={(e) => setNewSession({ ...newSession, timeSpent: e.target.value })}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={newSession.category}
                  onChange={(e) => setNewSession({ ...newSession, category: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Notes (optional)</label>
                <Textarea
                  placeholder="Key insights, topics covered, or next steps..."
                  value={newSession.notes}
                  onChange={(e) => setNewSession({ ...newSession, notes: e.target.value })}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="flex gap-4">
                <Button onClick={addSession} className="btn-yellow">
                  Log Session
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

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-dark">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-400">{sessions.length}</div>
              <p className="text-sm text-gray-400">Total Sessions</p>
            </CardContent>
          </Card>
          <Card className="card-dark">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-400">{formatTime(getTotalTime())}</div>
              <p className="text-sm text-gray-400">Total Time</p>
            </CardContent>
          </Card>
          <Card className="card-dark">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-400">{formatTime(getWeeklyTime())}</div>
              <p className="text-sm text-gray-400">This Week</p>
            </CardContent>
          </Card>
          <Card className="card-dark">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-400">
                {sessions.length > 0 ? Math.round(getTotalTime() / sessions.length) : 0}m
              </div>
              <p className="text-sm text-gray-400">Avg. Session</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <Card className="card-dark mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Time by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(categoryTotals).map(([category, time]) => (
                <div key={category} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${categoryColors[category as keyof typeof categoryColors]}`}></div>
                    <span className="text-sm">{category}</span>
                  </div>
                  <span className="font-semibold text-yellow-400">{formatTime(time)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Sessions */}
        <Card className="card-dark">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Recent Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sessions.map((session) => (
                <div key={session.id} className="border border-gray-700 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{session.subject}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <Badge className={`${categoryColors[session.category as keyof typeof categoryColors]} text-white text-xs`}>
                          {session.category}
                        </Badge>
                        <span className="text-sm text-gray-400">
                          {new Date(session.date).toLocaleDateString()}
                        </span>
                        <span className="text-sm font-semibold text-yellow-400">
                          {formatTime(session.timeSpent)}
                        </span>
                      </div>
                    </div>
                    <Button
                      onClick={() => deleteSession(session.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                    >
                      ×
                    </Button>
                  </div>
                  {session.notes && (
                    <p className="text-gray-300 text-sm">{session.notes}</p>
                  )}
                </div>
              ))}
              {sessions.length === 0 && (
                <p className="text-gray-400 text-center py-8">
                  No study sessions logged yet. Start tracking your learning journey!
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudyTracker;
