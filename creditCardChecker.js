// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(cCardArr) {
  let sumOfNum = 0;
  for (let i = cCardArr.length - 1; i >= 0; i--) {
    let currValue = cCardArr[i]
    if ((cCardArr.length - 1 - i) % 2 === 1) {
      currValue *= 2;
      if (currValue > 9) {
        currValue -= 9;
      }
    }
    sumOfNum += currValue;
  }
  //return sumOfNum % 10 === 0;
  if (sumOfNum % 10 === 0) {
    return 'valid';
  } return 'invalid';
}

// Tests
console.log(validateCred(valid1)); // Should print valid
/* Additional tests
console.log(validateCred(invalid5)); // Should print invalid
console.log(validateCred(mystery1)); //prints invalid
console.log(validateCred(mystery2)); //prints valid
console.log(validateCred(mystery3));//prints invalid
console.log(validateCred(mystery4));//prints invalid
console.log(validateCred(mystery5));//prints valid
*/

// Check for invalid numbers
function findInvalidCards(cCards) {
  let invalidArr = [];
  for (let i = 0; i < cCards.length; i++) {
    let currCredNum = cCards[i];
    if (validateCred(currCredNum) === 'invalid') {
      invalidArr.push(currCredNum);
    }
  }
  return invalidArr;
}

// Tests
console.log(findInvalidCards([mystery1, mystery2, mystery3, mystery4, mystery5])); //prints mystery cards 1 , 3, 4
/* Additional tests
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers
*/

// Identify credit card companies for faulty cards
function idInvalidCardCompanies(invalidCardArr) {
  let compArr = [];
  invalidCardArr.forEach(array => {
    if (array[0] === 3) {
      compArr.push('Amex');
    } else if (array[0] === 4) {
      compArr.push('Visa');
    } else if (array[0] === 5) {
      compArr.push('Mastercard');
    } else if (array[0] === 6) {
      compArr.push('Discover');
    } else {
      console.log('Company not found');
    }   
  })
  return compArr.filter((company, index) => compArr.indexOf(company) === index);

}
// Tests
console.log(idInvalidCardCompanies(batch)); 
// prints ['Visa', 'Mastercard', 'Amex', 'Discover']
/*
console.log(idInvalidCardCompanies([invalid1])); // prints ['Visa']
console.log(idInvalidCardCompanies([invalid4])); // prints ['Discover']
*/



