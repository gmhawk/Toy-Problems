/*
  Some people are standing in a row in a park.
  There are trees between them which cannot be moved.
  Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
  People can be very tall!

  EXAMPLE:
  For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
  sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

function sortByHeight(a) {
    const people = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== -1) {
            people.push(a[i]);
        }
    }
    people.sort((a,b) =>  (a - b));
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== -1) {
            a[i] = people.shift();
        }
    }
    return a;
}
