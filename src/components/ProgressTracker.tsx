import React from 'react';
import { ProgressEntry } from '../types';
import { TrendingUp } from 'lucide-react';

interface Props {
  entries: ProgressEntry[];
  onAddEntry: (entry: ProgressEntry) => void;
}

export const ProgressTracker: React.FC<Props> = ({ entries, onAddEntry }) => {
  const [weight, setWeight] = React.useState('');
  const [notes, setNotes] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight) return;

    onAddEntry({
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
      weight: parseFloat(weight),
      notes
    });

    setWeight('');
    setNotes('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            step="0.1"
            placeholder="Enter your weight"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="How are you feeling?"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200"
        >
          Add Entry
        </button>
      </form>

      <div className="space-y-3">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">{entry.date}</p>
              <p className="text-sm text-gray-500">{entry.notes}</p>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-indigo-500" />
              <span className="font-medium">{entry.weight} kg</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}