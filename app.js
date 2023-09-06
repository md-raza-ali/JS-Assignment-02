// // ANSWER NO: 01
// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var result = num1 + num2;
// alert("The Sum of two number is: " + result);

// // ANSWER NO: 02
// // SUBTRACTION
// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var result = num1 - num2;
// alert("The Subtraction of two number is: " + result);
// // MULTIPLICATION
// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var result = num1 * num2;
// alert("The Multiplication of two number is: " + result);
// // DIVISION
// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var result = num1 / num2;
// alert("The Division of two number is: " + result);
// // MODULUS
// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var result = num1 % num2;
// alert("The Modulus of two number is: " + result);

// // ANSWER NO: 03
// var input;
// document.write("Value after variable decleretion is:" + input);
// input = 10;
// document.write("<br>Initial value of variable is: " + input);
// input++;
// document.write("<br>Value after increment is: " + input);
// input = input + 7;
// document.write("<br>Value after Addition is: " + input);
// --input;
// document.write("<br>Value after Decrement is: " + input);
// input = input % 3;
// document.write("<br>The Reminder is: " + input);

// // ANSWER NO: 04
// var ticketCount = +prompt("Enter Number of Tickets do you want: ");
// var result = 600 * ticketCount;
// alert("Total Price of tickets is: PKR " + result);

// // ANSWER NO: 05
// for (i = 1; i <= 10; i++) {
//   document.write(`<br> 4 x ${i} = ` + 4 * i);
// }

// // ANSWER NO: 06
// // CELCIUS TO FARHENHEITE
// var c_to_f = +prompt("Enter Temperature in Celcius: ");
// var fResult = (c_to_f * 9) / 5 + 32;
// alert("The Temperature in Farhenhite is: " + fResult);
// // FARHENHEITE TO CELCIUS
// var f_to_c = +prompt("Enter Temperature in Farhenheite: ");
// var cResult = ((f_to_c - 32) * 5) / 9;
// alert("The Temperature in Celcius is: " + cResult);

// // ANSWER NO: 07
// const shipping = 100;
// var item1 = 600,
//   item2 = 300,
//   result1,
//   result2,
//   total;
// var quantity1 = +prompt("Enter the Quantity of Item 1: ");
// var quantity2 = +prompt("Enter the Quantity of Item 2: ");
// result1 = item1 * quantity1;
// result2 = item2 * quantity2;
// total = result1 + result2 + shipping;
// document.write("The Price of Item 1 is: " + result1);
// document.write("<br>The Price of Item 2 is: " + result2);
// document.write("<br>Shipping Charges: " + shipping);
// document.write("<br><br>Total Cost of your Order is: " + total);

// // ANSWER NO: 08
// var totalMarks = 950,
//   obtainMarks = 888,
//   percentage;
// percentage = (88 / 950) * 100;
// document.write(`Total Marks: ${totalMarks}`);
// document.write(`<br>Obtain Marks: ${obtainMarks}`);
// document.write(`<br>Percentage is: ${percentage}%`);

// // ANSWER NO: 09
// var dollar = +prompt("Enter the amount in Dollar: ");
// var riyal = +prompt("Enter the amount in Saudi Riyal: ");
// var dollarResult, riyalResult;
// dollarResult = dollar * 302.5;
// riyalResult = riyal * 80.65;
// document.write(`$${dollar} in PKR is: ${dollarResult}`);
// document.write(`<br> ${riyal} SAR  in PKR is: ${riyalResult}`);

// // ANSWER NO: 10
// var num = 10,
//   result;
// result = num + (5 * 10) / 2;
// document.write(`The result is: ${result}`);

// // ANSWER NO: 11
// var currentYear = 2023,
//   age;
// var birthYear = +prompt("Enter Your Birth Year");
// age = currentYear - birthYear;
// alert(`Your age is: ${age}`);

// // ANSWER NO: 12
// var radius = 20,
//   circum,
//   area;
// circum = 2 * 3.142 * radius;
// area = 3.142 * radius * radius;
// document.write(`The Radius is: ${radius}`);
// document.write(`<br>The Circumference is: ${circum}`);
// document.write(`<br>The Area is: ${area}`);

// // ANSWER NO: 13
// var favSnack = prompt("Enter Your Favourite Snack: "),
//   cur_age = +prompt("Enter Your Current Age: "),
//   est_age = +prompt("Enter Estimated Maximum Age"),
//   snacks_per_day = +prompt("Amount of Snacks per day: "),
//   result = (est_age - cur_age) * snacks_per_day;
// document.write(`Favourite Snack: ${favSnack}`);
// document.write(`<br>Current Age: ${cur_age}`);
// document.write(`<br>Estimated Maximum Age: ${est_age}`);
// document.write(`<br>Amount of Snacks per day: ${snacks_per_day}`);
// document.write(
//   `<br>You will need ${result} ${favSnack} to last you until the ripe old age of ${est_age}`
// );
