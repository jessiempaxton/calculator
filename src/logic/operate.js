import Big from "big.js";

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1" : "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  //Initially it looked like it should work, but when tested I saw the bug. First, I tried switching the logic in the if/else statement but received the alert with every division attempt. Then, I replaced "===" with "==" fixing the bug. This threw an error because "===" returns true if operands are strictly equal with no type camparison and "==" converts the operands if they are not the same type, then applies strict comparison. With "===" JavaScript was returning false with every division attempt thus creating the error and breaking the page. However, this does throw a warning in the console.
  if (operation === "÷") {
    if (two == "0") {
      alert("You cannot divide by zero.");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
