/*
  Example

  For statues = [6, 2, 3, 8], the output should be
  makeArrayConsecutive2(statues) = 3.

  Ratiorg needs statues of sizes 4, 5 and 7.
*/

function makeArrayConsecutive2(statues) {
// Find biggest
// Find smallest
// Biggest - smallest - statues.length - 2
  let biggest = statues[0];
  let smallest = statues[0];
  for(let i = 1; i < statues.length; i++) {
      if(statues[i] > biggest) {
          biggest = statues[i];
      }
      if(statues[i] < smallest) {
          smallest = statues[i];
      }
  }
  const gap = biggest - smallest - 1;
  let result = statues.length - 2 - gap;
  return Math.abs(result);
}
