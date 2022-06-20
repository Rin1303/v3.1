const bill = 275

const tip = function(bill) {
    return bill <= 430 && bill >= 40 ? bill * 0.15 : bill * 0.20;
}

console.log(`'Regningen var' ${bill}, tippet var ${tip(bill)} og den samlede værdi er ${bill + tip(bill)}`)

// opg 2
const calcTip = function(bill) {
    return bill <= 430 && bill >= 40 ? bill * 0.15 : bill * 0.20;
}

var bills = [275, 100, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(tips)

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]

// opg 3
var billls = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tiips = []

const tootal = []

for (let i = 0; i < billls.length; i++) {
    const tip = calcTip(billls[i]);
    tiips.push(tip);
    tootal.push(tip + billls[i]);
}

console.log(tiips)
console.log(tootal)