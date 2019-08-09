//complete the task
$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
	}
);

//delete the task
$("ul").on("click", "span", function(e){
		$(this).parent().fadeOut(200, function(){
				$(this).remove();
			}
		)
		e.stopPropagation();
	}
);


//create new task
$("input[type='text']").keypress(function(e){
		if(e.which === 13)
		{
			//Extract the text from input box
			var inpVal = $(this).val();
			//add new li with the new value
			$("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + inpVal +"</li>");
			$(this).val("");
		}
	}
);

//toggle add task
$(".fa-plus").click(function(){
		$("input[type='text']").fadeToggle()
	}
)
