window.setTimeout(function()
{
   //Function to list all the to-do items
   function listToDo()
   {
      console.log("*****************************")
      todo.forEach(
         function(elem,ind)
         {
            console.log(ind+1 + ": " + elem);
         }
      )
      console.log("*****************************")
   }

   //Function to add a new to-do item
   var todo = [];
   function addToDo()
   {
      var newTodo = prompt("Enter new to-do");
      todo.push(newTodo);
      console.log("To-Do added to the list");
   }

   //Function to delete a to-do item
   function delToDo()
   {
      var index = prompt("Enter item no. to delete an item");
      todo.splice(index-1,1);
      console.log("To-Do item deleted from the list");
   }

   //prompt for user selection
   var item = prompt("Please select an action");

   //Act as per user selection

   while(item !== "quit")
   {
      if(item === "new")
      {
         addToDo();
      }
      else if(item === "delete")
      {
         delToDo();
      }
      else if(item === "list")
      {
         listToDo();
      }

      item = prompt("Please select an action");
   }

   console.log("You have Quit the App");
}, 500);


