'use strict';


const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);
   


// task 1
// const events = new Set()
// for (const [,event] of [...gameEvents]) {
//     events.add(event)
// }
// for (const [,event] of gameEvents) {
//     events.add(event)
// }
// approach 2
const events = [...new Set(gameEvents.values())]
console.log(events);




// task 2 - After the game has finished, is was found that the yellow card from minute 64 
// was unfair. So remove this event from the game events log.

gameEvents.delete(64);
// console.log(gameEvents);

//3. Compute and log the following string to the console: "An event happened, on 
// average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(`An event happenend, on average, every ${ 90 / gameEvents.size} minutes.`);


// task 4
for (const [time, event] of gameEvents) {
    console.log(`[${time < 45 ? 'FIRST'  : 'SECOND'} HALF] ${time}: ${event}`);
}