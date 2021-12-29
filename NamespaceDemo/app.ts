/// <reference path="utility-functions.ts" />
import util = Utility.Fees;

const result1 = Utility.maxBooksAllowed(15);
console.log(result1);

// const result2 = Utility.Fees.calculateLateFee(100);
const result2 = util.calculateLateFee(100);
console.log(result2);

