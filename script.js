function displayFilebox() {
	document.getElementById("arquivo").click();
}

function displayFile() {
	var x = document.getElementById("arquivo").files[0].name; 
	document.getElementById("sp1").innerHTML = x;
}