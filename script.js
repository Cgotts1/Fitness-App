const dateEl = document.querySelector("#date")
const programEl = document.querySelector('#program')
const profileEl = document.querySelector('#profile')
const mealGroup = document.querySelector('.meal-group')
const meals = document.querySelector('.meals')
const muscleGroup = document.querySelector('.muscle-group')
const exercises = document.querySelector('.exercises')




let breakfastMeals = [
  {
    food: "Pancakes",
    drink: "Milk"
  },
  {
    food: "Chicken Tacos",
    drink: "Lemonade"
  },
  {
    food: "Taquitos",
    drink: "Lasagna"
  },
  {
    food: "Pasta",
    drink: "Horchata"
  }
]

let lunchMeals = [
  {
    food: "Hamburger",
    drink: "Soda"
  },
  {
    food: "Pizza",
    drink: "Rootbear"
  },
  {
    food: "Taquitos",
    drink: "Lasagna"
  },
  {
    food: "Pasta",
    drink: "Horchata"
  }
]

let dinnerMeals = [
  {
    food: "Pancakes",
    drink: "Milk"
  },
  {
    food: "Chicken Tacos",
    drink: "Lemonade"
  },
  {
    food: "Taquitos",
    drink: "Lasagna"
  },
  {
    food: "Pasta",
    drink: "Horchata"
  }
]





//Sets current date 
setInterval(function () {
    var time = moment().format("dddd, h:mm:ss a");
    dateEl.textContent = time;
  }, 1000);

  
if(moment().format("h:mm:ss a") >= '12:00:00 pm' && moment().format("h:mm:ss a") <= '5:00:00 pm' ){
mealGroup.innerHTML = `Lunch`
meals.innerHTML = `
<li>Chicken</li>
<li>Rice</li>
<li>Vegetables</li>
`
} else if (moment().format("h:mm:ss a") >= '5:00:01 pm'){
  mealGroup.innerHTML = `Dinner`
meals.innerHTML = `
<li>${dinnerMeals[1].food}</li>
<li>${dinnerMeals[1].drink}</li>
<li>Pickles</li>
`
} else if (moment().format("a") !== 'pm'){
  mealGroup.innerHTML = `Breakfast`
meals.innerHTML = `
<li>Waffles</li>
<li>Milk</li>
<li>Oatmeal</li>
`
}










if(moment().format("dddd") === "Monday"){
  muscleGroup.innerHTML = `Chest`;
  exercises.innerHTML = `<li>Bicep Curls</li>
  <li>Tricep Rings</li>
  <li>Plank</li>`
} else if(moment().format("dddd") === "Tuesday"){
  muscleGroup.innerHTML = `Legs`;
  exercises.innerHTML = `<li>Bicep Curls</li>
  <li>Tricep Rings</li>
  <li>Plank</li>`
}else if(moment().format("dddd") === "Wednesday"){
  muscleGroup.innerHTML = `Arms`;
  exercises.innerHTML = `<li>Bicep Curls</li>
  <li>Tricep Rings</li>
  <li>Plank</li>`
}else if(moment().format("dddd") === "Thursday"){
  muscleGroup.innerHTML = `Back`;
  exercises.innerHTML = `<li>Bicep Curls</li>
  <li>Tricep Rings</li>
  <li>Plank</li>`
}else if(moment().format("dddd") === "Friday"){
  muscleGroup.innerHTML = `Quads`;
  exercises.innerHTML = `<li>Bicep Curls</li>
  <li>Tricep Rings</li>
  <li>Plank</li>`
}else if(moment().format("dddd") === "Saturday"){
  muscleGroup.innerHTML = `Forearm`;
  exercises.innerHTML = `<li>Bicep Curls</li>
  <li>Tricep Rings</li>
  <li>Plank</li>`
}else if(moment().format("dddd") === "Sunday"){
  muscleGroup.innerHTML = `Calves`;
  exercises.innerHTML = `<li>Bicep Curls</li>
  <li>Tricep Rings</li>
  <li>Plank</li>`
}