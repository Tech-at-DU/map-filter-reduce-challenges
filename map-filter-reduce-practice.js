/**
 * map / filter / reduce practice
 *
 * Rules:
 * - Solve each TODO using ONLY map, filter, and/or reduce.
 * - Console.log after each solution to self-check.
 *
 * Notes:
 * - The `primes` array includes 1, which is NOT prime.
 *   Keep it anyway for practice, or remove it if you want correctness.
 */

const names = ["anatoly", "bobby", "carlsen", "gary", "fabiano"];
const primes = [2, 3, 5, 7, 11, 13];

const users = [
  { name: "anatoly", rating: 2848 },
  { name: "bobby", rating: 2785 },
  { name: "carlsen", rating: 2882 },
  { name: "gary", rating: 2851 },
  { name: "fabiano", rating: 2844 },
];

// --------------------------------------------------------------
// MAP
// map transforms each item and returns a NEW array (same length).

// Example (provided): uppercase names
const upperNames = names.map((name) => name.toUpperCase());
console.log("upperNames:", upperNames);
// expected: ["ANATOLY","BOBBY","CARLSEN","GARY","FABIANO"]

// TODO 1: Map `names` to an array of first 3 letters
// expected: ["ana","bob","car","gar","fab"]
const threeLetterNames = null;
console.log("threeLetterNames:", threeLetterNames);

// TODO 2: Map `primes` to squares
// expected: [4,9,25,49,121,169]
const primeSquares = null;
console.log("primeSquares:", primeSquares);

// TODO 3: Map `users` to just names
// expected: ["anatoly","bobby","carlsen","gary","fabiano"]
const userNames = null;
console.log("userNames:", userNames);

// TODO 4: Map `users` to just ratings
// expected: [2848,2785,2882,2851,2844]
const userRatings = null;
console.log("userRatings:", userRatings);

// TODO 5: Map `users` to description strings
// expected: ["anatoly rating: 2848", ...]
const userDescriptions = null;
console.log("userDescriptions:", userDescriptions);

// --------------------------------------------------------------
// FILTER
// filter selects a subset and returns a NEW array (same or shorter length).

// TODO 6: Filter `names` to those starting with "b"
// expected: ["bobby"]
const bNames = null;
console.log("bNames:", bNames);

// TODO 7: Filter `primes` to numbers greater than 10
// expected: [11,13]
const overTen = null;
console.log("overTen:", overTen);

// TODO 8: Filter `users` to ratings greater than 2850
// expected: [{ name:"carlsen", ... }, { name:"gary", ... }]
const strongUsers = null;
console.log("strongUsers:", strongUsers);

// --------------------------------------------------------------
// REDUCE
// reduce combines array items into ONE value (number, string, object, etc.)
// Always provide an initial value: arr.reduce((acc, item) => ..., initialValue)

// TODO 9: Reduce `names` to the first letters as one string
// expected: "abcgf"
const initials = null;
console.log("initials:", initials);

// TODO 10: Reduce `primes` to the total sum
// expected: 42
const primeSum = null;
console.log("primeSum:", primeSum);

// TODO 11: Reduce `users` to an object mapping name -> rating
// expected: { anatoly: 2848, bobby: 2785, ... }
const ratingsByName = null;
console.log("ratingsByName:", ratingsByName);

// --------------------------------------------------------------
// COMBINE: map + filter + reduce
// These methods return arrays, so you can chain them.

// TODO 12: Filter `primes` to numbers less than 10, then reduce to sum
// expected: 18  (1+2+3+5+7)
const underTenSum = null;
console.log("underTenSum:", underTenSum);

// TODO 13: Filter `users` to rating > 2850, then map to strings
// expected: ["carlsen rating: 2882", "gary rating: 2851"]
const topUserStrings = null;
console.log("topUserStrings:", topUserStrings);

// TODO 14: Data cleanup: filter out undefined values, then reduce to sum
const data = [23, 44, undefined, 12, undefined, 59, 83, 13, 42, 71, undefined];
// expected sum: 347
const dataSum = null;
console.log("dataSum:", dataSum);
