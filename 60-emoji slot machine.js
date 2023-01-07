/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/

const slotMachine = document.querySelector('.emoji-slots-game');
const food = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';

function makeFruitArray(arr) {
    return arr.map(x => x.htmlCode)
}

function getRandomFruits(arr) {
    const random = Math.floor(Math.random() * food.length)
    return arr[random]
}

slotMachine.innerHTML = ""
// write your fetch request here 
fetch(food)
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < 9; i++) {
            slotMachine.innerHTML += `<li>${getRandomFruits(makeFruitArray(data))}</li>`
        }
    });