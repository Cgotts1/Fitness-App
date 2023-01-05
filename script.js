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
const foodDescription = document.querySelector(".food-description")

let breakfastMeals = [
  {
    food: "Pancakes",
    drink: "Milk",
    calories: 200,
  },
  {
    food: "Chicken Tacos",
    drink: "Lemonade",
    calories: 300,
  },
  {
    food: "Taquitos",
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
    description: "A Yummy source of vitamin C"
  },
  {
    food: "women",
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

setInterval(function () {
  var time = moment().format("dddd, HH:mm:ss a");
  hiddenDate.textContent = time;
}, 1000);

//Sets current date
setInterval(function () {
  var time = moment().format("dddd, h:mm:ss a");
  dateEl.textContent = time;
}, 1000);

// if(moment().format("h:mm:ss a") >= '12:00:00 pm' && moment().format("h:mm:ss a") <= '5:00:00 pm' ){
// mealGroup.innerHTML = `Lunch`
// meals.innerHTML = `
// <li>Chicken</li>
// <li>Rice</li>
// <li>Vegetables</li>
// `
// } else if (moment().format("h:mm:ss a") >= '5:00:01 pm'){
//   mealGroup.innerHTML = `Dinner`
// meals.innerHTML = `
// <li>${dinnerMeals[1].food}</li>
// <li>${dinnerMeals[1].drink}</li>
// <li>Pickles</li>
// `
// } else if (moment().format("a") !== 'pm'){
//   mealGroup.innerHTML = `Breakfast`
// meals.innerHTML = `
// <li>Waffles</li>
// <li>Milk</li>
// <li>Oatmeal</li>
// `
// }

let dinnerItem = dinnerMeals[Math.floor(Math.random()*dinnerMeals.length)];


function getRandomDinner(){
  return dinnerItem;
}

mealPictureOne.addEventListener('click', getRandomDinner())



if (
  moment().format("HH:mm") >= "12:00" &&
  moment().format("HH:mm") <= "03:00"
) {
  mealGroup.innerHTML = `Lunch`;
  meals.innerHTML = `
  <li>Chicken</li>
  <li>Rice</li>
  <li>Vegetables</li>
  `;
} else if (moment().format("HH:mm") >= "03:01") {
  mealGroup.innerHTML = `Dinner`;
  meals.innerHTML = `
  <li>${dinnerMeals[0].food}</li>
  <li>${dinnerMeals[0].drink}</li>
  <li>Pickles</li>
  `
  
  ;
  mealPictureOne.style.backgroundImage = `url('https://source.unsplash.com/random/?${dinnerMeals[0].food}')`;

  mealCalories.textContent = `Meals | Total Calories: ${dinnerMeals[0].calories}`;
  foodDescription.innerHTML =  `<p>${dinnerMeals[0].description}</p>`
} else {
  mealGroup.innerHTML = `Breakfast`;
  meals.innerHTML = `
  <li>Waffles</li>
  <li>Milk</li>
  <li>Oatmeal</li>
  `

  ;
}

if (moment().format("dddd") === "Monday") {
  muscleGroup.innerHTML = `Chest`;
  exercises.innerHTML = `<li>Bicep Curls</li>
    <li>Tricep Rings</li>
    <li>Plank</li>`;
} else if (moment().format("dddd") === "Tuesday") {
  muscleGroup.innerHTML = `Legs`;
  exercises.innerHTML = `<li>Bicep Curls</li>
    <li>Tricep Rings</li>
    <li>Plank</li>`;
} else if (moment().format("dddd") === "Wednesday") {
  muscleGroup.innerHTML = `Arms`;
  exercises.innerHTML = `<li>Bicep Curls</li>
    <li>Tricep Rings</li>
    <li>Plank</li>`;
} else if (moment().format("dddd") === "Thursday") {
  muscleGroup.innerHTML = `Back`;
  exercises.innerHTML = `<li>Bicep Curls</li>
    <li>Tricep Rings</li>
    <li>Plank</li>`;
} else if (moment().format("dddd") === "Friday") {
  muscleGroup.innerHTML = `Quads`;
  exercises.innerHTML = `<li>Bicep Curls</li>
    <li>Tricep Rings</li>
    <li>Plank</li>`;
} else if (moment().format("dddd") === "Saturday") {
  muscleGroup.innerHTML = `Forearm`;
  exercises.innerHTML = `<li>Bicep Curls</li>
    <li>Tricep Rings</li>
    <li>Plank</li>`;
} else if (moment().format("dddd") === "Sunday") {
  muscleGroup.innerHTML = `Calves`;
  exercises.innerHTML = `<li>Bicep Curls</li>
    <li>Tricep Rings</li>
    <li>Plank</li>`;
}
