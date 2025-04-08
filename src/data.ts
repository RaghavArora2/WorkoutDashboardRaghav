import { WorkoutDay, ProgressEntry, WeeklyHabits } from './types';

export const workoutSchedule: WorkoutDay[] = [
  {
    name: 'Monday',
    focus: 'Push – Chest, Shoulders, Triceps',
    warmup: [
      { name: 'Jumping Jacks (1 min)', demo: 'https://www.youtube.com/watch?v=c4DAnQ6DtF8', sets: '1 min' },
      { name: 'Arm Circles', demo: 'https://www.youtube.com/watch?v=HnUeXKM1brQ', sets: '30s' },
      { name: 'Pushup Hold', demo: 'https://www.youtube.com/watch?v=IODxDxX7oi4', sets: '10 reps' }
    ],
    exercises: [
      { name: 'Pushups', sets: '3 sets max', demo: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
      { name: 'Knee Pushups', sets: '3x10', demo: 'https://www.youtube.com/watch?v=XMLx8xzhd7I' },
      { name: 'Dumbbell Chest Press', sets: '4x10', demo: 'https://www.youtube.com/watch?v=VmB1G1K7v94' },
      { name: 'Dumbbell Shoulder Press', sets: '3x12', demo: 'https://www.youtube.com/watch?v=B-aVuyhvLHU' },
      { name: 'Overhead Tricep Extensions', sets: '3x12', demo: 'https://www.youtube.com/watch?v=_gsUck-7M74' }
    ]
  },
  {
    name: 'Tuesday',
    focus: 'Pull – Back, Biceps',
    warmup: [
      { name: 'Skipping', demo: 'https://www.youtube.com/watch?v=dQqApCGd5Ss', sets: '1 min' },
      { name: 'Light Dumbbell Rows', demo: 'https://www.youtube.com/watch?v=pYcpY20QaE8', sets: '1 min' }
    ],
    exercises: [
      { name: 'Bent-over Barbell Rows', sets: '4x10', demo: 'https://www.youtube.com/watch?v=vT2GjY_Umpw' },
      { name: 'One-arm Dumbbell Row', sets: '3x10', demo: 'https://www.youtube.com/watch?v=pYcpY20QaE8' },
      { name: 'Barbell Bicep Curls', sets: '3x12', demo: 'https://www.youtube.com/watch?v=kwG2ipFRgfo' },
      { name: 'Dumbbell Hammer Curls', sets: '3x10', demo: 'https://www.youtube.com/watch?v=zC3nLlEvin4' }
    ]
  },
  {
    name: 'Wednesday',
    focus: 'Legs + Glutes',
    warmup: [
      { name: 'Leg Swings', demo: 'https://www.youtube.com/watch?v=JbyjNymZOt0', sets: '30s' },
      { name: 'Bodyweight Squats', demo: 'https://www.youtube.com/watch?v=aclHkVaku9U', sets: '2x15' }
    ],
    exercises: [
      { name: 'Goblet Squats', sets: '4x12', demo: 'https://www.youtube.com/watch?v=Mehz7tCxjSE' },
      { name: 'Barbell Deadlifts', sets: '4x10', demo: 'https://www.youtube.com/watch?v=ytGaGIn3SjE' },
      { name: 'Dumbbell Lunges', sets: '3x12', demo: 'https://www.youtube.com/watch?v=D7KaRcUTQeE' },
      { name: 'Glute Bridges', sets: '3x15', demo: 'https://www.youtube.com/watch?v=m2Zx-57cSok' }
    ]
  },
  {
    name: 'Thursday',
    focus: 'Cardio + Core',
    warmup: [
      { name: 'Jump Rope Warmup', demo: 'https://www.youtube.com/watch?v=dQqApCGd5Ss', sets: '1 min' }
    ],
    exercises: [
      { name: 'Skipping', sets: '1 min', demo: 'https://www.youtube.com/watch?v=dQqApCGd5Ss' },
      { name: 'Mountain Climbers', sets: '30s', demo: 'https://www.youtube.com/watch?v=nmwgirgXLYM' },
      { name: 'High Knees', sets: '30s', demo: 'https://www.youtube.com/watch?v=OAJ_J3EZkdY' },
      { name: 'Russian Twists', sets: '20 reps', demo: 'https://www.youtube.com/watch?v=wkD8rjkodUI' },
      { name: 'Leg Raises', sets: '15 reps', demo: 'https://www.youtube.com/watch?v=l4kQd9eWclE' },
      { name: 'Plank', sets: '30-60 sec', demo: 'https://www.youtube.com/watch?v=pSHjTRCQxIw' }
    ]
  },
  {
    name: 'Friday',
    focus: 'Full Body Strength',
    exercises: [
      { name: 'Dumbbell Thrusters', sets: '3x10', demo: 'https://www.youtube.com/watch?v=3Jt_7vVDcFs' },
      { name: 'Pushups', sets: '3 sets max', demo: 'https://www.youtube.com/watch?v=IODxDxX7oi4' },
      { name: 'Barbell Deadlift', sets: '3x8', demo: 'https://www.youtube.com/watch?v=ytGaGIn3SjE' },
      { name: 'Clean & Press', sets: '3x6', demo: 'https://www.youtube.com/watch?v=2OOd0IBt_70' },
      { name: 'Renegade Rows', sets: '3x10', demo: 'https://www.youtube.com/watch?v=roCP6wCXPqo' }
    ]
  },
  {
    name: 'Saturday',
    focus: 'Flexibility + Mobility',
    exercises: [
      { name: 'Cat Cow Pose', sets: '10 reps', demo: 'https://www.youtube.com/watch?v=w1S6aVgrUqg' },
      { name: 'Butterfly Stretch', sets: '30s hold', demo: 'https://www.youtube.com/watch?v=NhJBO1YQk5U' },
      { name: 'Cobra Stretch', sets: '30s hold', demo: 'https://www.youtube.com/watch?v=JDcdhTuycOI' },
      { name: 'Hamstring Stretch', sets: '30s each leg', demo: 'https://www.youtube.com/watch?v=1u1NupGDtZ8' },
      { name: 'Hip Openers', sets: '30s each side', demo: 'https://www.youtube.com/watch?v=7pG8SCfJiJw' }
    ]
  },
  {
    name: 'Sunday',
    focus: 'Rest Day',
    exercises: []
  }
];

export const progressData: ProgressEntry[] = [
  {
    date: 'April 8',
    weight: 93,
    notes: 'Starting weight – chest/belly fat'
  }
];

export const initialHabits: WeeklyHabits = {
  Monday: { workout: true, cleanEating: true, sleep: true, water: true },
  Tuesday: { workout: true, cleanEating: true, sleep: true, water: true },
  Wednesday: { workout: true, cleanEating: true, sleep: true, water: true },
  Thursday: { workout: true, cleanEating: true, sleep: true, water: true },
  Friday: { workout: true, cleanEating: true, sleep: true, water: true },
  Saturday: { workout: true, cleanEating: true, sleep: true, water: true },
  Sunday: { workout: false, cleanEating: true, sleep: true, water: true }
};