function subString (number)
{
        var counter = -1;
        var num_String = number.toString();
        var num__Of_Digits = num_String.length;
        var temp1=0;

        for(var i=0; i<num__Of_Digits; i++)
        {
            for (var j=i+1; j<=num__Of_Digits; j++)
            {

                temp1 = parseInt(num_String.substring(i,j));
                if(number%temp1==0)
                    counter++;
            }
        }
        return counter;
}

console.log(subString(111));
