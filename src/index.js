module.exports = function reverse (n) {
  let reverseNum = '';
    let absoluteNumberToString = Math.abs(n).toString();
    for (let i = absoluteNumberToString.length-1; i>=0; i--) {
        reverseNum += absoluteNumberToString[i];
    }
    return Number(reverseNum);
}
