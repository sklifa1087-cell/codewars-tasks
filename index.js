// // 8kyu

// // Multiply
// // This code does not execute properly. Try to figure out why.
function multiply(a, b){
  return a * b
}

// // Convert boolean values to strings 'Yes' or 'No'.
// // Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false
function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
}

// // Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num) {
    return -Math.abs(num);
}

// Grasshopper - Terminal game combat function
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
function combat(health, damage) {
    return Math.max(0, health - damage);
}

// Grasshopper - Terminal game move function
// In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
    function move (position, roll) {
    return position +(roll * 2)
}

// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
function sumMix(x){
let sum = 0;
    for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
    }
    return sum;
}

// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
function findSmallestInt(arr) {
    let smallest = Infinity ;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < smallest) {
        smallest = arr[i];
        }
    }
    return smallest;
}

// Array plus array
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((a, b) => a + b, 0);
}

// Reversed Strings
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str){
    return str.split("").reverse().join("")
}