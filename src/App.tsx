import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';
import { WorkoutDayComponent } from './components/WorkoutDay';
import { StatsCard } from './components/StatsCard';
import { workoutSchedule } from './data';
import { Exercise } from './types';

function App() {
  const [schedule, setSchedule] = useState(workoutSchedule);
  const [activeDay, setActiveDay] = useState(0);

  const handleExerciseToggle = (dayIndex: number, exercise: Exercise) => {
    const newSchedule = [...schedule];
    const exerciseIndex = newSchedule[dayIndex].exercises.findIndex(
      e => e.name === exercise.name
    );
    newSchedule[dayIndex].exercises[exerciseIndex].completed = 
      !newSchedule[dayIndex].exercises[exerciseIndex].completed;
    setSchedule(newSchedule);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-indigo-600 animate-pulse" />
            <h1 className="text-2xl font-bold text-gray-900">Fitness Dashboard</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        {/* Stats Card */}
        <StatsCard />

        {/* Workout Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {schedule.map((day, index) => (
                <button
                  key={day.name}
                  onClick={() => setActiveDay(index)}
                  className={`flex-1 py-4 px-6 text-center font-medium text-sm focus:outline-none transition-all duration-200 ${
                    activeDay === index
                      ? 'border-b-2 border-indigo-500 text-indigo-600 bg-indigo-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="block">{day.name}</span>
                  <span className="block mt-1 text-xs">{day.focus}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="p-6">
            <WorkoutDayComponent
              day={schedule[activeDay]}
              onExerciseToggle={(exercise) => handleExerciseToggle(activeDay, exercise)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;