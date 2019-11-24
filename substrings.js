function subString (number)
{
    var count = 0;
    var numstring = number.toString();
    var split1 = numstring.split("");
  if (number == 0) 
  {
      return 0;
  }
  for (var i = 0; i < split1.length; i++)
  {
    if (number%split1[i] == 0) {count ++}
  }
  return count
}

console.log(subString(877692));