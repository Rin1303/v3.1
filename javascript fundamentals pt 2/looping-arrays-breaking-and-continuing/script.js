const percentageOfWorld1 = population => (population / 7900) * 100;

// function percentageOfWorld(population) {
//     const percentage = (population / 7900) * 100
//     return percentage
// }

const populations = [10, 5, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}

console.log(percentages2);