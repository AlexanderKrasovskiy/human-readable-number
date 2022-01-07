module.exports = function toReadable(num) {
  const strNum = num.toString();
  
  const zeroToTeenArr = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const decimalsArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (num < 20) return zeroToTeenArr[num];
  if (num < 100 && num % 10 === 0) return makeDecimals(strNum[0] - 2);
  if (num < 100) return `${makeDecimals(strNum[0] - 2)} ${zeroToTeenArr[+strNum[1]]}`;
  if (num % 100 === 0) return makeHundreds(+strNum[0]);
  if (num % 10 === 0 && num % 100 >= 20) return `${makeHundreds(+strNum[0])} ${makeDecimals(+strNum[1] - 2)}`;
  if (num % 100 < 20) return `${makeHundreds(+strNum[0])} ${zeroToTeenArr[+strNum.slice(1)]}`;
  return `${makeHundreds(+strNum[0])} ${makeDecimals(+strNum[1] - 2)} ${zeroToTeenArr[+strNum[2]]}`;

  function makeDecimals(index) {
    return decimalsArr[index]
  }
  function makeHundreds(index) {
    return `${zeroToTeenArr[index]} hundred`
  }
}
