/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon",
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli",
    "🧀 cheese",
    "🥦 broccoli",
    "🌶️ hot sauce"
]
const rainbow = ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"]


function removeDupesFromArraySet(arr) {
    return [...new Set(arr)]
}

function removeDupesFromArray(arr) {
    const ans = {}
    for (item of arr) {
        if (ans[item]) {
            console.log("exist")
        } else {
            ans[item] = true
        }
    }
    return ans
}

console.log(removeDupesFromArraySet(eggScrambleRecipe));
console.log(removeDupesFromArraySet(rainbow))

console.log(removeDupesFromArray(eggScrambleRecipe));
console.log(removeDupesFromArray(rainbow))


/*
Dont work. One of the peppers dup
function removeDupesFromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
            arr.splice(i, 1)
        }
    }
    return arr
}
*/