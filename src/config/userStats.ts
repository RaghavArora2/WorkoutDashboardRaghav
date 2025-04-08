export const userStats = {
  personal: {
    name: "Raghav Arora",
    age: 21,
    weight: 93,
    height: 6.3, // in feet
    targetWeight: 78,
  },
  fitness: {
    maxPushups: 5,
    maxPullups: 0,
    maintenanceCalories: 2800,
    proteinTarget: 186, // in grams (2g per kg)
    workoutExperience: "Noobie",
  },
  goals: {
    primaryGoal: "Weight Loss",
    secondaryGoal: "Muscle Gain",
    weeklyWeightLossTarget: 0.5, // kg per week
  }
};

// Calculate BMI
export const calculateBMI = (weight: number, heightInFeet: number) => {
  const heightInMeters = heightInFeet * 0.3048;
  return (weight / (heightInMeters * heightInMeters)).toFixed(1);
};

// Calculate ideal weight range (BMI 18.5-24.9)
export const calculateIdealWeightRange = (heightInFeet: number) => {
  const heightInMeters = heightInFeet * 0.3048;
  const minWeight = (18.5 * heightInMeters * heightInMeters).toFixed(1);
  const maxWeight = (24.9 * heightInMeters * heightInMeters).toFixed(1);
  return { min: minWeight, max: maxWeight };
};

// Calculate TDEE (Total Daily Energy Expenditure)
export const calculateTDEE = (weight: number, heightInFeet: number, age: number, activityLevel = 1.55) => {
  const heightInCm = heightInFeet * 30.48;
  const bmr = 10 * weight + 6.25 * heightInCm - 5 * age + 5; // Mifflin-St Jeor Equation
  return Math.round(bmr * activityLevel);
};