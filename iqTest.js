
function iqTest (numbers) {
    var num = numbers.split(" ");
    var even = [], odd = [], index = 0;

    for (var i = 0; i < num.length; i++)
    {
        if (num[i]%2 == 0)
        {
            even.push(i);
        }
        else
        {
            odd.push(i);
        }
        if (i > 1 && odd.length > even.length && even.length > 0) {
            return even[0]+1
        }
        if (i > 1 && even.length > odd.length && odd.length > 0) {
           return odd[0]+1
        }
    }
/*
console.log("there is " + even + " even numbers");
console.log("there is " + odd +  " odd numbers");
*/
}

console.log(iqTest("7 4 2 8 2"));

/*
var num = "2 4 1 4 6 8";
var splitest = num.split(" ");
console.log(splitest);
*/

