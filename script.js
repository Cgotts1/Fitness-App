const dateEl = document.querySelector("#date");
const hiddenDate = document.querySelector("#hidden-date");
const programEl = document.querySelector("#program");
const profileEl = document.querySelector("#profile");
const mealGroup = document.querySelector(".meal-group");
const meals = document.querySelector(".meals");
const mealCalories = document.querySelector("#meals-calories");
const muscleGroup = document.querySelector(".muscle-group");
const exercises = document.querySelector(".exercises");
const mealPictureOne = document.querySelector(".meal-picture-one");
const workoutImage = document.querySelector(".workout-image");


//https://www.trifectanutrition.com/blog/vegetable-egg-white-frittata-recipe   For diet

let breakfastMeals = [
  {
    food: "Pancakes",
    drink: "Fruit Juice",
    calories: 200,
  },
  {
    food: "Eggs",
    drink: "Lemonade",
    calories: 300,
  },
  {
    food: "Fruit",
    drink: "Lasagna",
    calories: 100,
  },
  {
    food: "Pasta",
    drink: "Horchata",
    calories: 250,
  },
];

let lunchMeals = [
  {
    food: "Hamburger",
    drink: "Soda",
    calories: 240,
  },
  {
    food: "Pizza",
    drink: "Rootbear",
    calories: 230,
  },
  {
    food: "Taquitos",
    drink: "Lasagna",
    calories: 220,
  },
  {
    food: "Pasta",
    drink: "Horchata",
    calories: 210,
  },
];

let dinnerMeals = [
  {
    food: "Tacos",
    drink: "Milk",
    calories: 230,
    description: "A Yummy source of vitamin C",
  },
  {
    food: "Pizza",
    drink: "Lemonade",
    calories: 256,
  },
  {
    food: "Taquitos",
    drink: "Lasagna",
    calories: 245,
  },
  {
    food: "Pasta",
    drink: "Horchata",
    calories: 250,
  },
];


let chestExercises = [
  {
    exercise: "Barbell Bench Press",
    exercise2: "Dumbbell Bench Press",
    exercise3: "Alternating Dumbbell Bench Press",
    exercise4: "Hips-Off, Single-Arm Bench Press",
    exercise5: "Cable Crossover",
    exercise6: "Incline Dumbbell Press",
    exercise7: "Dumbbell Half Flye",
    exercise8: "Dumbbell Flye",
    exercise9: "Incline Dumbbell Flye",
    exercise10: "Low-Incline Press",
    exercise11: "Speed Bench Press",
    exercise12: "Landmine Press",
    exercise13: "Floor Press",
    exercise14: "Prone Flye",
    exercise15: "Pullover",
    exercise16: "Plate Pressout",
    exercise17: "3-Way Suspension Trainer Flye",
    exercise18: "Pushup",
    exercise19: "Suspension Trainer Reverse Flye to External Rotation to Face Pull",
    exercise20: "One-Armed Medicine Ball Pushup",
    exercise21: " Medicine Ball Pushup Drop n Pop",
    exercise22: "Close-Grip Pushup",
    exercise23: "Medicine Ball Crossover Pushup",
    exercise24: "Plyo Pushup",
    exercise25: "Wide-Grip Pushup",
    exercise26: "Band-Resisted Pushup w/ Feet Elevated",
    exercise27: "Band-Resisted Flye",
    exercise28: "Triceps Extension",
    exercise29: "Pec Deck",
    exercise30: "Wide-Grip Dips",
    exercise31: "Smith Machine Incline Press",
    exercise32: "Low-Cable Crossover",
    exercise33: "Decline Pushup",
    exercise34: "Back Lunge to One-Arm Chest Pass",
    exercise35: "Med Ball Pushup",
    exercise36: "Medicine Ball Rotational Throw",
    exercise37: "One-arm Flye Pushup",
    exercise38: "Chest Press Machine",
    exercise39: "Banded Chest Flye",
    exercise40: "High Peak Pushup",
    exercise41: "Spiderman Pushup",
    exercise42: "Plank to Pushup",
    exercise43: "One-arm Hang Snatch",
    exercise44: "Split-Stance Head-to-Hip",
    exercise45: "Medium Cable Flye",
    exercise46: "3-Way Pushups",
    exercise47: "Burpee",
    exercise48: "Dowel Rod Pushup",
    exercise49: "Landmine Standing Reach",
    exercise50: "Incline Cable Flye to Chest Press",

  }
]


let armExercises = [
  {
    exercise: "Hammer Curl",
    exercise2: "Dip",
    exercise3: "Close-grip Curl",
    exercise4: "Chinup",
    exercise5: "Suspension Trainer Triceps Extension",
    exercise6: "Diamond Pushup",
    exercise7: "Neutral-grip Triceps Extension",
    exercise8: "Poundstone Curl",
    exercise9: "Suspension Trainer Rotational Inverted Row",
    exercise10: "Suspension Trainer Biceps Curl",
    exercise11: "Close-grip Pushup",
    exercise12: "Behind-the-Back Cable Curl",
    exercise13: "EZ-Bar Preacher Curl",
    exercise14: "Reverse Curl",
    exercise15: "Wide-grip Curl",
    exercise16: "Overhead Press",
    exercise17: "Pullover/Triceps Extension",
    exercise18: "Conventional Curl",
    exercise19: "Triceps Pushdown",
    exercise20: "Decline Triceps Extension",
    exercise21: "Close-grip Bench Press",
    exercise22: "Lying Triceps Extension",
    exercise23: "Face Pull",
    exercise24: "Underhand Kickback",
    exercise25: "Hips-off One-arm Dumbbell Press",
    exercise26: "High Pull",
    exercise27: "Band Lateral Raise",
    exercise28: "Dive Bomber Pushup",
    exercise29: "Seated Dumbbell Clean",
    exercise30: "Standing Dumbbell Flye",
    exercise31: "Four-in-One Dumbbell Curl",
    exercise32: "Renegade Row",
    exercise33: "Monkey Bars",
    exercise34: "Farmer's Carry",
    exercise35: "Plyo Pushup",
    exercise36: "Inverted Bar Rows",
    exercise37: "High-to-Low Plank",
    exercise38: "Seated Wrist Curl",
    exercise39: "Towel Pullup and Chinup",
    exercise40: "Waiter's Walk",
    exercise41: "Incline Dumbbell Row",
    exercise42: "Prone-grip Pullup",
    exercise43: "Upright Row",
    exercise44: "Resistance Band Push-Pull",
    exercise45: "Tate Press",
    exercise46: "Suspension Trainer Pushup",
    exercise47: "One-arm Row",
    exercise48: "Overhead Cable Triceps Extension",
    exercise49: "Side Curl With Band",
    exercise50: "Single-arm Row to Press",
  }
]



let legExercises = [
  {
    exercise1: "Front Squat",
    exercise2: "Bulgarian Split Squat",
    exercise3: "Romanian Deadlift",
    exercise4: "Barbell Squat",
    exercise5: "Dumbbell Stepup",
    exercise6: "Deadlift",
    exercise7: "Swiss Ball Leg Curl",
    exercise8: "Single-leg Romanian Deadlift",
    exercise9: "Leg Press",
    exercise10: "Bodyweight Calf Raise",
    exercise11: "Walking Lunge",
    exercise12: "Pause Squat",
    exercise13: "Reverse Lunge",
    exercise14: "Dumbbell Squat",
    exercise15: "Kettlebell Swing",
    exercise16: "Jump Squat",
    exercise17: "Barbell Calf Raise",
    exercise18: "Kneeling Hip Flexor Stretch",
    exercise19: "Skater Squat",
    exercise20: "Jumping Calf Raise",
    exercise21: "Barbell Hip Thrust",
    exercise22: "Glute Bridge Walkout",
    exercise23: "Single-leg Glute Bridge",
    exercise24: "Seated Calf Raise",
    exercise25: "Swiss Ball Wall Squat",
    exercise26: "Reverse Table-Up",
    exercise27: "Kettlebell Press-Out",
    exercise28: "Suspension Trainer Leg Curl",
    exercise29: "Overhead Lunge",
    exercise30: "Standing Calf Raise",
    exercise31: "Sumo Squat to Stand",
    exercise32: "Goblet Squat",
    exercise33: "Lateral Bound",
    exercise34: "Mini Band Monster Walk",
    exercise35: "Weighted Wall Sit",
    exercise36: "Pistol Squat",
    exercise37: "Single-leg Clock Squat",
    exercise38: "Single-leg Broad Jump",
    exercise39: "Split-stance Box Jump",
    exercise40: "180 Squat Jump",
    exercise41: "King Arthur's Pose",
    exercise42: "Box Jump",
    exercise43: "Single-leg Wall Squat",
    exercise44: "Banded Deadlift",
    exercise45: "Banded Glute Bridge",
    exercise46: "Reverse Airborne Lunge",
    exercise47: "Inverted Hamstring",
    exercise48: "World's Greatest Stretch",
    exercise49: "Broad Jump",
    exercise50: "Overhead Squat With Dowel Rod",
  }
]

let dumbbellExercises = [
  {
    exercise1: "Goblet Squat",
    exercise2: "Stepup",
    exercise3: "Turkish Getup",
    exercise4: "Pullover",
    exercise5: "Walking Lunge",
    exercise6: "Lateral Lunge",
    exercise7: "Lunge to Overhead Press",
    exercise8: "Tate Press",
    exercise9: "Floor Press",
    exercise10: "Arnold Press",
    exercise11: "Squat to Press",
    exercise12: "Seated Military Press",
    exercise13: "High Pull",
    exercise14: "Romanian Deadlift",
    exercise15: "Thruster",
    exercise16: "Bulgarian Split Squat",
    exercise17: "Strict Curl",
    exercise18: "Wrist Curl",
    exercise19: "Hammer Curl",
    exercise20: "Renegade Row",
    exercise21: "Bentover Row",
    exercise22: "Reverse Flye",
    exercise23: "Overhead Triceps Extension",
    exercise24: "Side Plank With Lateral Raise",
    exercise25: "Woodchop",
    exercise26: "Lateral Raise",
    exercise27: "Bentover Triceps Kickback",
    exercise28: "Skullcrusher",
    exercise29: "Farmers Walk",
    exercise30: "Deadlift to Shrug",
  }
]


let proteinFoods = [
  {
    food1: "Eggs",
    food2: "Almonds",
    food3: "Chicken breast",
    food4: "Cottage cheese",
    food5: "Greek yogurt",
    food6: "Milk",
    food7: "Lentils",
    food8: "Lean beef",
    food9: "Salmon",
    food10: "Quinoa",
    food11: "Ezekiel bread",
    food12: "Pumpkin seeds",
    food13: "Turkey breast",
    food14: "Shellfish",
    food15: "Peanuts",
    food16: "Peanut Butter",
    food17: "Rice",
    food18: "Pork",
    food19: "Tuna",
    food20: "Shrimp",
    food21: "Lamb",
    food22: "Sardines",
    food23: "Tempeh",
    food24: "Natto",
    food25: "White Beans",
    food26: "Black Beans",
    food27: "",
    food28: "",
    food29: "",
    food30: "",   
  }
]

//https://www.k12.wa.us/sites/default/files/public/childnutrition/programs/ffvp/pubdocs/vegetablesa-z.pdf begetable pdf

let vegetableFoods = [
  {
    food1:"Artichoke",
    food2:"Asparagus",
    food3:"Aubergene (eggplant)",
    food4:"Avocado",
    food5:"Beet",
    food6:"Bok Choy",
    food7:"Broccoli",
    food8:"Broccolini",
    food9:"Broccoli Raab",
    food10:"Brussels Sprouts",
    food1:"Chinese Cabbage",
    food2:"Green Cabbage",
    food3:"Purple Cabbage",
    food4:"Savoy Cabbage",
    food5:"Carrots",
    food6:"Cauliflower",
    food7:"Celeriac",
    food8:"Celery",
    food9:"Chard (Red and Swiss)",
    food10:"Chicory",
    food1:"Corn",
    food2:"Cress",
    food3:"Cucumbers",
    food4:"Daikon",
    food5:"Garlic",
    food6:"Green Beans",
    food7:"Greens",
    food8:"Collard Greens",
    food9:"Mustard Greens",
    food10:"Gourds",
    food1:"Jicama",
    food2:"Kale",
    food3:"Kohlrabi",
    food4:"Leeks",
    food5:"Arugula Lettuce",
    food6:"Butter Lettuce",
    food7:"Endive Lettuce",
    food8:"Green and Red Leaf Lettuce",
    food9:"Romaine Lettuce",
    food10:"Lima Beans",
    food1:"Mushrooms",
    food2:"Okra",
    food3:"Onions",
    food4:"Green Onions",
    food5:"Parsnips",
    food6:"Peas",
    food7:"Snap Sugar Peas",
    food8:"Snow Peas",
    food9:"Anaheim Peppers",
    food10:"Sweet peppers",
    food1:"Potatoes",
    food2:"Pumpkin",
    food3:"Radicchio",
    food4:"Radish",
    food5:"Rhubarb",
    food6:"Romanesco (cauliflower)",
    food7:"Rutabaga",
    food8:"Shallots",
    food9:"Spinach",
    food10:"Squash",
    food1:"Acorn Squash ",
    food2:"Butternut Squash",
    food3:"Patti Pan Squash",
    food4:"Spaghetti Squash",
    food5:"Swede",
    food6:"Sweet Potato",
    food7:"Tomatillo",
    food8:"Tomatoes",
    food9:"Turnips",
    food10:"Water Chestnuts",
    food1:"Yam",
    food2:"Zucchini",
    food3:"",
    food4:"",
    food5:"",
    food6:"",
    food7:"",
    food8:"",
    food9:"",
    food10:"",
    
  }
]


let fruitFoods = [
  {
    food1:"Apple",
    food2:"Watermelon",
    food3:"Orange",
    food4:"Pear",
    food5:"Cherry",
    food6:"Strawberry",
    food7:"Nectarine",
    food8:"Grape",
    food9:"Mango",
    food10:"Blueberry",
    food1:"Pomegranate",
    food2:"Starfruit",
    food3:"Plum",
    food4:"Banana",
    food5:"Raspberry",
    food6:"Mandarin",
    food7:"Jackfruit",
    food8:"Papaya",
    food9:"Kiwi",
    food10:"Pineapple",
    food1:"Lime",
    food2:"Lemon",
    food3:"Apricot",
    food4:"Grapefruit",
    food5:"Melon",
    food6:"Coconut",
    food7:"Avocado",
    food8:"Peach",
    food9:"",
    food10:"",
  }
]


let grainFoods = [
  {
    food1: "Barley",
    food2: "Bulgur",
    food3: "Farro",
    food4: "Millet",
    food5: "Quinoa",
    food6: "Black rice",
    food7: "Brown rice",
    food8: "Red rice",
    food9: "Wild rice",
    food10: "Oatmeal",
    food1: "Popcorn",
    food2: "Whole-wheat flour",
    food3: "Whole-grain breakfast cereals",
    food4: "Whole-wheat bread",
    food5: "pasta",
    food6: "crackers",
    food7: "",
    food8: "",
    food9: "",
    food10: "",

  }
]


setInterval(function () {
  var time = moment().format("dddd, HH:mm:ss a");
  hiddenDate.textContent = time;
}, 1000);

//Sets current date
setInterval(function () {
  var time = moment().format("dddd, h:mm:ss a");
  dateEl.textContent = time;
}, 1000);



let dinnerItem = dinnerMeals[Math.floor(Math.random() * dinnerMeals.length)];

function getRandomDinner() {
  return dinnerItem;
}

mealPictureOne.addEventListener("click", getRandomDinner());

if (
  moment().format("HH:mm") >= "00:00" &&
  moment().format("HH:mm") <= "10:59"
) {
  mealGroup.innerHTML = `Breakfast`;
  meals.innerHTML = `
  <li>${breakfastMeals[0].food}</li>
  <li>${breakfastMeals[0].food}</li>
  <li>${breakfastMeals[0].food}</li>
  `;
} else if (
  moment().format("HH:mm") >= "11:00" &&
  moment().format("HH:mm") <= "15:59"
) {
  mealGroup.innerHTML = `Lunch`;
  meals.innerHTML = `
  <li>${lunchMeals[0].food}</li>
  <li>${lunchMeals[0].drink}</li>
  <li>${lunchMeals[1].food}</li>
  `;
  mealPictureOne.style.backgroundImage = `url('https://source.unsplash.com/random/?${dinnerMeals[0].food}')`;

  mealCalories.textContent = `Meals | Total Calories: ${dinnerMeals[0].calories}`;
 
} else {
  mealGroup.innerHTML = `Dinner`;
  meals.innerHTML = `
  <li>${dinnerMeals[0].food}</li>
  <li>${dinnerMeals[0].drink}</li>
  <li>${dinnerMeals[0].food}</li>
  `;
}

if (moment().format("dddd") === "Monday") {
  muscleGroup.innerHTML = `Chest`;
  exercises.innerHTML = `<li>Bench Press</li>
    <li>Push Ups</li>
    <li>Pull Downs</li>
    <li>Pull Ups</li>
    <li>Bent-over Rows</li>

    <li>Fly</li>`;
} else if (moment().format("dddd") === "Tuesday") {
  muscleGroup.innerHTML = `Legs`;
  exercises.innerHTML = `<li>Squats</li>
    <li>Lunges</li>
    <li>Calf Raises</li>
    <li>Leg Press</li>
    <li>Push Ups</li>
    
    `;
} else if (moment().format("dddd") === "Wednesday") {
  muscleGroup.innerHTML = `Arms`;
  exercises.innerHTML = `<li>Standing Bicep Curls</li>
    <li>Bench Tricep</li>
    <li>Preacher Curls</li>
    <li>Tricep</li>
    <li>Plank</li>`;
} else if (moment().format("dddd") === "Thursday") {
  muscleGroup.innerHTML = `Legs`;
  exercises.innerHTML = `<li>Squats</li>
  <li>Lunges</li>
  <li>Calf Raises</li>
  <li>Leg Press</li>`;
} else if (moment().format("dddd") === "Friday") {
  muscleGroup.innerHTML = `Chest`;
  exercises.innerHTML = `<li>Bench Press</li>
  <li>Push Ups</li>
  <li>Pull Downs</li>
  <li>Pull Ups</li>
  <li>Bent-over Rows</li>
  <li>Fly</li>`;
} else if (moment().format("dddd") === "Saturday") {
  muscleGroup.innerHTML = `Legs`;
  exercises.innerHTML = `<li>Squats</li>
  <li>Lunges</li>
  <li>Calf Raises</li>
  <li>Leg Press</li>`;
} else if (moment().format("dddd") === "Sunday") {
  muscleGroup.innerHTML = `Arms/Chest`;
  exercises.innerHTML = `<li>Standing Bicep Curls</li>
  <li>Bench Tricep</li>
  <li>Preacher Curls</li>
  <li>Tricep</li>
  <li>Plank</li>
  <li>Bench Press</li>
  <li>Push Ups</li>
  <li>Pull Downs</li>
  <li>Pull Ups</li>
  <li>Bent-over Rows</li>
  <li>Fly</li>`;
}
