export interface Exercise {
  name: string;
  sets: string;
  demo: string;
  completed?: boolean;
}

export interface WorkoutDay {
  name: string;
  focus: string;
  warmup?: Exercise[];
  exercises: Exercise[];
}

export interface ProgressEntry {
  date: string;
  weight: number;
  notes: string;
}

export interface HabitDay {
  workout: boolean;
  cleanEating: boolean;
  sleep: boolean;
  water: boolean;
}

export interface WeeklyHabits {
  [key: string]: HabitDay;
}