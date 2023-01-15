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
const foodDescription = document.querySelector(".food-description");
const liEl = document.getElementsByTagName('li');

console.log(liEl);




function changeLiColor(){
 
  this.liEl.style.backgroundColor = "blue";
}

liEl.addEventListener('click', changeLiColor())

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
  foodDescription.innerHTML = `<p>${dinnerMeals[0].description}</p>`;
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
