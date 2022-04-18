// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { TestWatcher } = require("jest")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// ----------------------------------------------------------------

// 1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// ******* PSUEDOCODE *******
// Create a function --> shuffleArray
// Input --> array of strings
    // remove first element in array
    // shuffle remaining elements
// Output --> Any variation of the original array minus its first element


describe("shuffleArray", () => {
    const expectedColors1 = ["yellow", "blue", "pink", "green"]
    const expectedColors2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
      expect(shuffleArray(["purple", "blue", "green", "yellow", "pink" ])).toEqual(expect.arrayContaining(expectedColors1))
      expect(shuffleArray(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])).toEqual(expect.arrayContaining(expectedColors2))
    })
  })


  // ******* RED FAILURE *******
    // FAIL  week-4-assessment-NTR-TheMekaVerse/code-challenges.test.js
    // ● shuffleArray › takes in an array, removes the first item from the array and shuffles the remaining content

    //     ReferenceError: shuffleArray is not defined


// b) Create the function that makes the test pass.

shuffleArray = (array) => {
    array.shift()
    array.sort(function(a, b){return 0.5 - Math.random()})
    return array
}

// ******* GREEN FAILURE *******
    // PASS  week-4-assessment-NTR-TheMekaVerse/code-challenges.test.js
    // shuffleArray
    // ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total




// ----------------------------------------------------------------

// 2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.


// a) Create a test with expect statements for each of the variables provided.


// ******* PSUEDOCODE *******
// Create a function --> minAndMaxNums
// Input --> array of integers
// Output --> array of integers; two elements total (min and max nums from original array)


describe("minAndMaxNums", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
      expect(minAndMaxNums(nums1)).toEqual([-8, 90])
      expect(minAndMaxNums(nums2)).toEqual([5, 109])
    })
  })


// ******* RED FAILURE *******
    // FAIL  week-4-assessment-NTR-TheMekaVerse/code-challenges.test.js
    // ● minAndMaxNums › takes an array of numbers and returns an array of the minimum and maximum numbers in that order

    // ReferenceError: minAndMaxNums is not defined


// b) Create the function that makes the test pass.


minAndMaxNums = (arrayOfNums) => {
    let min = Math.min(...arrayOfNums)  
    let max = Math.max(...arrayOfNums)
    return [min, max]
  }


// ******* GREEN FAILURE *******
//   PASS  week-4-assessment-NTR-TheMekaVerse/code-challenges.test.js
//   minAndMaxNums
//     ✓ takes an array of numbers and returns an array of the minimum and maximum       numbers in that order (1 ms)

//     Test Suites: 1 passed, 1 total
//     Tests:       1 passed, 1 total



// ******* REFACTOR *******

minAndMaxNums = (arrayOfNums) => {
    return [Math.min(...arrayOfNums), Math.max(...arrayOfNums)]
  }




// -------------------------------------------------------------


// 3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.


// ******* PSUEDOCODE *******
// Create a function --> noDuplicateNums
// Input --> Two different arrays of numbers    
    // Concat both arrays?
    // Remove duplicates
// Output --> Combination of input arrays without duplicate numbers

// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("noDuplicateNums", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4] 
        const concatArray = testArray1.concat(testArray2)
      expect(concatArray).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
  })

// ******* RED FAILURE *******
// ******* 
// Unsure how to configure the expect statement to consider both arrays. When using (array1, array2) syntax, terminal indicates that expect can only receive one argument. The syntax used above indicates a 'deep equality' and that more data is being received than expected.
// *******

    // FAIL  week-4-assessment-NTR-TheMekaVerse/code-challenges.test.js
    // noDuplicateNums
    // ✕ takes in two arrays as arguments and returns one array with no duplicate values (3 ms)
    // ● noDuplicateNums › takes in two arrays as arguments and returns one array with no duplicate values

    // expect(received).toEqual(expected) // deep equality


// b) Create the function that makes the test pass.


noDuplicateNums = (nums1, nums2) => {
    let numsCombined = nums1.concat(nums2)
    return [...new Set(numsCombined)]
 }

 // ******* GREEN FAILURE *******

//  Unable to get a green failure because jest will not process beyond the test written above. This function and the refactor below were processed in a separate JS file and work accordingly.


 // ******* REFACTOR *******

 noDuplicateNums = (nums1, nums2) => {
    return [...new Set(nums1.concat(nums2))]
 }