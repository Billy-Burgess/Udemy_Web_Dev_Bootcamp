// CODING EXERCISE 38 - It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical 
// arguments and returns their product (multiply them together).  
// Make sure to return the value instead of printing it!

// multiply(2, 3) // 6
// multiply(9, 9) // 81
// multiply(5, 4) // 20

function multiply(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x * y;
}

// CODING EXERCISE 39 - I often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.  It's really not that hard to decide.) 
// Please help me decide by writing me a function called isShortsWeather. It should accept a single number argument, which we will call 
// temperature(but you can name it whatever you want, of course). If temperature is greater than or equal to 75, return true. Otherwise, return false.   
// This exercise assumes temperature is in Fahrenheit.  I apologize to all my Celsius-using students!

// isShortsWeather(80) //true
// isShortsWeather(48) //false
// isShortsWeather(75) //true

function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}

// CODING EXERCISE 40 - Please write a function called lastElement which accepts a single array argument.  
// The function should return the last element of the array (without removing the element).  
// If the array is empty, the function should return null.

// lastElement([3,5,7]) //7
// lastElement([1]) //1
// lastElement([]) //null

function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

// CODING EXERCISE 41 - Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized 
// (but the rest of the string unchanged).  For example:

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

// CODING EXERCISE 42 - Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101

function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}

// CODING EXERCISE 43 - Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  
// If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, 
// but for this exercise we will use Monday as the first day.

function returnDay(day) {
    let weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day < 1 || day > 7) {
        return null;
    } else {
        return weekDay[day - 1];
    }
}
