
function Validation(){
	var firstVal = document.getElementById("FstNo").value;
	if(firstVal !=21)
	{
		alert("Sorry! The Answer of The First Number is Incorrect")
	}
	var secondVal = document.getElementById("SecNo").value;
	if(secondVal !=25)
	{
		alert("Sorry! The Answer of The Second Number is Incorrect")
	}
	var thirdVal = document.getElementById("ThdNo").value;
	if(thirdVal !=29)
	{
		alert("Sorry! The Answer of The Third Number is Incorrect")
	}
	if(firstVal ==21 && secondVal ==25 && thirdVal ==29)
	{
		alert("Congratulations =D You Won the Meeeeeeal!")
	}
}

