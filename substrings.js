/*
function subString (number)
{
    var count = 0;
    var numstring = number.toString();
    var split1 = numstring.split("");
    var sub = split1.slice(1);
    if (number == 0) 
     {
         return 0;
     }
while (number > 0)
{
  for (var i = 0; i < split1.length; i++)
  {
    if (split1[i] > 0) {
        if (number%split1[i] == 0) {
            count ++
        }
    }
  }
  number = number / (1*split1.length);
}
  return count
}

console.log(subString(877692));


*/
function subString (number)
{
    var split = number.toString().split("");
    var count = 0;

    for (var i = 0; i < split.length; i++)
    {
        if (split[i] > 0) {
            if (number%split[i] == 0) {
                count ++;
            }
        }
    }    
    for (var i = 0; i < split.length; i++)
    {
    var newnum = parseInt(split[i]+split[i+1], 10);
    if (number%newnum == 0) {
        count ++;
    }
    return count;
}
 console.log(subString(877692));
/*
console.log(length);
console.log(split);
console.log(newnum);
*/
