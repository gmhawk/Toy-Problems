/*
  Given a sequence of integers as an array,
  determine whether it is possible to obtain a strictly increasing sequence
  by removing no more than one element from the array

  For sequence = [1, 3, 2, 1], the output should be
  almostIncreasingSequence(sequence) = false.

  There is no one element in this array that
  can be removed in order to get a strictly increasing sequence.
*/

function almostIncreasingSequence(sequence) {
 let prev = sequence[0];
 let skips = 0;
 for (let i = 1; i < sequence.length; i += 1) {
   if (sequence[i] <= prev) {
     skips += 1;
     if (sequence[i] > (sequence[i - 2] || sequence[i] - 1)) {
       prev = sequence[i];
     }
     if (skips > 1) {
       return false;
     }
   } else {
     prev = sequence[i];
   }
 }
 return true;
};
