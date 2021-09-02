import fruits from './foods';
import { choice, remove } from './helpers';

// Randomly draw a fruit from the array
// Log the message “I’d like one RANDOMFRUIT, please.”
// Log the message “Here you go: RANDOMFRUIT”
// Log the message “Delicious! May I have another?”
// Remove the fruit from the array of fruits
// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”

let randomFruit = choice(fruits)

console.log(`I’d like one ${randomFruit.item}, please.`)
console.log(`Here you go: ${randomFruit.item}`)
console.log(`Delicious! May I have another?`)
remove(fruits, randomFruit.idx);
console.log(`I’m sorry, we’re all out. We have ${fruits.length} left: ${fruits}`)