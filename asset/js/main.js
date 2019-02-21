//checked specific todos by clicking
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

//click x to delete todos
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagtion();// this will ensure the fadeout
						//does not affect other elements
	
});
//start by selecting the input with type text.
//WHY USE ON() HERE?
	/*click() only adds listeners for existing eleemts
		on() will add listeners for all potential future elements
	*/
$("input[type='text']").keypress(function(event)
{	
	 //checking the enter key
	if(event.which===13)
	{
		//let start by extracting the value.
		var new_todo = $(this).val();
		//CLEAR THE INPUT
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + new_todo+ "</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});