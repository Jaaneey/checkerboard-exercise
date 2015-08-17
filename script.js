// Your JS goes here
var parent = document.getElementsByTagName("body")[0];

//parent.appendChild(document.querySelector(".class2"));

var gradient = "linear-gradient(getColorGradient, getColorGradient)";
parent.style.background = "linear-gradient(blue, grey)";

for (i=0; i<63; i++){
		var newDiv = document.createElement("div"); 
		newDiv.className= "class"+i;
		newDiv.style.width = "11.1%";
		newDiv.style.float = "left";
		newDiv.style.paddingBottom = "11.1%";
		newDiv.style.background = "";
		parent.appendChild(newDiv);

 	if (i % 2 === 0){
 		newDiv.style.backgroundColor = "red";
 		newDiv.style.opacity= ".35";
 		
 	}
}


function getColorGradient() {
	
	var letters = '0123456789ABCDEF'.split('');
    var color = '#FF12';
    for (var i = 0; i < 2; i++ ) {
        color += letters[Math.floor(Math.random() * 14)];
    }
  	return color;
}







