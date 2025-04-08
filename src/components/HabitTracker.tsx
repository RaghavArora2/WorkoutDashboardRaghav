import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { WeeklyHabits } from '../types';

interface Props {
  habits: WeeklyHabits;
  onToggleHabit: (day: string, habit: keyof WeeklyHabits[string]) => void;
}

export const HabitTracker: React.FC<Props> = ({ habits, onToggleHabit }) => {
  const days = Object.keys(habits);
  const habitTypes = ['workout', 'cleanEating', 'sleep', 'water'] as const;
  const habitLabels = {
    workout: 'Workout Done',
    cleanEating: 'Ate Clean',
    sleep: '7+ hrs Sleep',
    water: 'Water 3+ Litres'
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Habit</th>
            {days.map(day => (
              <th key={day} className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                {day.slice(0, 3)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {habitTypes.map(habit => (
            <tr key={habit}>
              <td className="px-3 py-2 text-sm text-gray-900">{habitLabels[habit]}</td>
              {days.map(day => (
                <td key={`${day}-${habit}`} className="px-3 py-2 text-center">
                  <button
                    onClick={() => onToggleHabit(day, habit)}
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    {habits[day][habit] ? (
                      <CheckCircle className="text-green-500 inline-block" size={20} />
                    ) : (
                      <Circle className="inline-block" size={20} />
                    )}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};