function validateCode (code) {
  var regex = new RegExp("^(1|2|3)");
  return regex.test(code);
}

console.log(validateCode(411));