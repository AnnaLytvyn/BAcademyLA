//minimal
console.log('number sum', (0.1 + 0.2).toFixed(1));

console.log('string sum', Number("1") + 2);

const usbSize = 16; //gb
const fileSize = 820; //mb
const amountOfFiles = Math.floor(usbSize * 1024 / fileSize);
console.log('amountOfFiles', amountOfFiles);

//normal
const moneyInWallet = 5000;
const itemCost = 24;
const amountOfItems = Math.floor(moneyInWallet / itemCost);
const amountLeft = moneyInWallet % itemCost;
console.log('amountOfItems', amountOfItems, 'amountLeft', amountLeft);

const number = 258;
const revertedNumber = String(number).split('').reverse().join('');
console.log('revertedNumber', revertedNumber);

//maximum
const moneyDeposit = 50000;
const interest = 0.05; //per year
const terms = 2; //month
const profit = moneyDeposit * interest / 12 * terms;
console.log('profit', profit);

console.log(2 && 0 && 3);
console.log(2 || 0 || 3);
console.log(2 && 0 || 3);