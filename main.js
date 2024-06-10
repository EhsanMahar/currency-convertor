import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to Codewith Ehsan Mahar - currency convertor\n"));
//List of currencies and their exchange rates 
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280
};
let user_answer = await inquirer.prompt([
    {
        name: "From_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    }, {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    }
]);
//perform currency conversion by using formula 
let from_amount = exchange_rate[user_answer.From_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`Cnverted Amount=${converted_amount.toFixed(2)}`);
