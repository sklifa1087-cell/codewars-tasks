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