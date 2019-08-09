window.setTimeout(function() {
     //Function 1: printReverse()
   function printReverse(arr)
   {
      var n = prompt("Enter array elements. Type \"end\" to end it ");
      while(n !== "end")
      {
         arr.push(n);
         n = prompt("Enter array elements. Type \"end\" to end it ");
      }
      var i = arr.length - 1;
      while(i >= 0)
      {
         console.log(arr[i]);
         i--;
      }
   }

   //Function 2: isUniform()
   function isUniform(arr)
   {
      var n = prompt("Enter array elements. Type \"end\" to end it ");
      while(n !== "end")
      {
         arr.push(n);
         n = prompt("Enter array elements. Type \"end\" to end it ");
      }
      var j = arr.length;
      var k = arr[0];
      for(var i = 1; i < j; i++)
      {
         var l = arr[i];
         if(l == k)
         {
            result = "true";
         }
         else if(l != k)
         {
            result = "false";
            i = j;
         }
      }
      console.log(result);
   }

   //Function 3: sumArray()
   function sumArray(arr)
   {
      var n = prompt("Enter numeric array elements. Type \"end\" to end it ");
      while(n !== "end")
      {
         n = Number(n);
         arr.push(n);
         n = prompt("Enter numeric array elements. Type \"end\" to end it ");
      }
      var i = 0;
      var j = arr.length;
      var sum = 0;
      while(i < j)
      {
         sum+=arr[i];
         i++;
      }
      console.log(sum);
   }

   //Function 4: max()
   function max(arr)
   {
      var n = prompt("Enter numeric array elements. Type \"end\" to end it ");
      while(n !== "end")
      {
         n = Number(n);
         arr.push(n);
         n = prompt("Enter numeric array elements. Type \"end\" to end it ");
      }
      var i = 0;
      var j = arr.length;
      var max = 0;
      while(i < j)
      {
         if(arr[i] > max)
         {
            max = arr[i];
         }
         i++;
      }
      console.log(max);
   }

//Ask user to select the function
   var funcType = prompt("Input the function name that you want to perform");
       
   //Perform function as per user input
   while (funcType !== "quit")
   {
      var arr = [];
      if (funcType === "reverse")
      {
         console.log("You have entered \"reverse\"!");
         printReverse(arr);
      }
      else if (funcType === "uniform")
      {
         console.log("You have entered \"uniform\"!");
         isUniform(arr);
      }
      else if (funcType === "sum")
      {
         console.log("You have entered \"sum\"!");
         sumArray(arr);
      }
      else if (funcType === "max")
      {
         console.log("You have entered \"max\"!");
         max(arr);
      }
      
      funcType = prompt("Input the function name that you want to perform");
   }

   console.log("You have exited!");
   alert("You have exited!");
}, 1000);





