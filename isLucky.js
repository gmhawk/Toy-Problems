/*
  Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

  Given a ticket number n, determine if it's lucky or not.

  Example

  For n = 1230, the output should be
  isLucky(n) = true;
  For n = 239017, the output should be
  isLucky(n) = false.
*/

function isLucky(n) {
    let num = n.toString();
    let leftHalf = 0;
    let rightHalf = 0;
    if(num.length % 2 > 0) {
        return false;
    }
    else {
        num = num.split("");
    }
    for(let i = 0; i < num.length; i++) {
        if(i < num.length / 2) {
            leftHalf += Number(num[i]);
        }
        if(i >= num.length / 2) {
            rightHalf += Number(num[i]);
        }
    }
    if(leftHalf === rightHalf) {
        return true;
    }
    else {
        return false;
    }
}
