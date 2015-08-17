// Your JS goes here
var parent = document.getElementsByTagName("body")[0];

//parent.appendChild(document.querySelector(".class2"));


for (i=0; i<63; i++){
		var newDiv = document.createElement("div"); 
		newDiv.className= "class"+i;
		newDiv.style.width = "11.1%";
		newDiv.style.float = "left";
		newDiv.style.paddingBottom = "11.1%";
		newDiv.style.backgroundColor = "red";
		parent.appendChild(newDiv);

 	if (i % 2 === 0){
 		newDiv.style.backgroundColor = "black";
 	}
}


