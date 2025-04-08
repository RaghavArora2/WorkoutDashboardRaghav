import React from 'react';
import { Activity, Target, Scale, Ruler, Brain, Flame, Trophy } from 'lucide-react';
import { userStats, calculateBMI, calculateIdealWeightRange, calculateTDEE } from '../config/userStats';

export const StatsCard: React.FC = () => {
  const bmi = calculateBMI(userStats.personal.weight, userStats.personal.height);
  const idealWeight = calculateIdealWeightRange(userStats.personal.height);
  const tdee = calculateTDEE(userStats.personal.weight, userStats.personal.height, userStats.personal.age);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.02]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">{userStats.personal.name}</h2>
            <p className="text-gray-600 text-sm">Fitness Journey</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-indigo-500" />
              <div>
                <p className="text-sm text-gray-500">Age</p>
                <p className="font-medium">{userStats.personal.age} years</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Ruler className="h-5 w-5 text-indigo-500" />
              <div>
                <p className="text-sm text-gray-500">Height</p>
                <p className="font-medium">{userStats.personal.height}ft</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Scale className="h-5 w-5 text-indigo-500" />
              <div>
                <p className="text-sm text-gray-500">Current</p>
                <p className="font-medium">{userStats.personal.weight}kg</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-indigo-500" />
              <div>
                <p className="text-sm text-gray-500">Target</p>
                <p className="font-medium">{userStats.personal.targetWeight}kg</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-500">Weight Loss Progress</span>
              <span className="text-sm font-medium text-indigo-600">
                {Math.round((userStats.personal.weight - userStats.personal.targetWeight) / 0.5)} weeks left
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
                style={{ 
                  width: `${Math.min(100, Math.max(0, ((userStats.personal.weight - userStats.personal.targetWeight) / (93 - userStats.personal.targetWeight)) * 100))}%` 
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Activity className="h-5 w-5 text-indigo-600" />
              <h3 className="font-medium text-gray-900">Fitness Stats</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">BMI</p>
                <p className="font-medium">{bmi}</p>
              </div>
              <div>
                <p className="text-gray-500">Ideal Weight</p>
                <p className="font-medium">{idealWeight.min}-{idealWeight.max}kg</p>
              </div>
              <div>
                <p className="text-gray-500">Max Pushups</p>
                <p className="font-medium">{userStats.fitness.maxPushups} reps</p>
              </div>
              <div>
                <p className="text-gray-500">Max Pullups</p>
                <p className="font-medium">{userStats.fitness.maxPullups} reps</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Flame className="h-5 w-5 text-orange-600" />
              <h3 className="font-medium text-gray-900">Nutrition Goals</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Maintenance</p>
                <p className="font-medium">{tdee} kcal</p>
              </div>
              <div>
                <p className="text-gray-500">Target Calories</p>
                <p className="font-medium">{tdee - 500} kcal</p>
              </div>
              <div>
                <p className="text-gray-500">Protein Goal</p>
                <p className="font-medium">{userStats.fitness.proteinTarget}g</p>
              </div>
              <div>
                <p className="text-gray-500">Weekly Loss</p>
                <p className="font-medium">{userStats.goals.weeklyWeightLossTarget}kg</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Experience Level</p>
              <p className="font-medium">{userStats.fitness.workoutExperience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};