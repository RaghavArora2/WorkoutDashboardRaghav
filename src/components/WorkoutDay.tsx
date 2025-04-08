import React from 'react';
import { ExternalLink, CheckCircle, Circle, Flame } from 'lucide-react';
import { Exercise, WorkoutDay } from '../types';

interface Props {
  day: WorkoutDay;
  onExerciseToggle: (exercise: Exercise) => void;
}

export const WorkoutDayComponent: React.FC<Props> = ({ day, onExerciseToggle }) => {
  if (!day) return null;

  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <Flame className="h-5 w-5 text-orange-500" />
        <h2 className="text-xl font-semibold text-gray-900">{day.focus}</h2>
      </div>
      
      {day.warmup && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Warm-up</h3>
          <div className="bg-orange-50 rounded-lg p-4">
            <ul className="space-y-3">
              {day.warmup.map((exercise, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-700">{exercise.name}</span>
                  <span className="text-gray-500">({exercise.sets})</span>
                  <a
                    href={exercise.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600"
                  >
                    <ExternalLink size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Workout</h3>
        <ul className="space-y-4">
          {day.exercises.map((exercise, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onExerciseToggle(exercise)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  {exercise.completed ? (
                    <CheckCircle className="text-green-500" size={20} />
                  ) : (
                    <Circle size={20} />
                  )}
                </button>
                <span className={exercise.completed ? 'line-through text-gray-500' : 'text-gray-700'}>
                  {exercise.name}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <span className="text-gray-500">{exercise.sets}</span>
                <a
                  href={exercise.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-600"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};