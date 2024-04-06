import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.76,
    INR: 83.3,
    PKR: 277.54,
    TL: 32.03,
    AFN: 71.23
};
let answerUser = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "enter the currency you want to convert from: ",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "TL", "AFN"]
    },
    {
        name: "to",
        type: "list",
        message: " Enter the currency you want to convert to: ",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "TL", "AFN"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount"
    }
]);
let fromAmount = currency[answerUser.from];
let toAmount = currency[answerUser.to];
let Amount = answerUser.amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
let limitedDecimal = convertedAmount.toFixed(0); // for fixing the decimal values and gaining the whole number
console.log(limitedDecimal);
