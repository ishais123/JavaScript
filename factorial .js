function factorialize(num) {
  Number(num)
  if (typeof num !== 'number')
    return 'This is not number. Please run this script again.'
  else
    if (num < 1 || num > 18)
      return "The number need to be between 1 to 18. please run this script again."
    else
      if (num === 0 || num === 1)
      return 1;
      for (var i = num - 1; i >= 1; i--) {
      num *= i;
  }
  return num;
}
console.log(factorialize(2));