// Your JS goes here
var parent = document.getElementsByTagName("body")[0];

//parent.appendChild(document.querySelector(".class2"));

var switching = setInterval(switchAround, 3000);


for (i=0; i<63; i++){
		var newDiv = document.createElement("div"); 
		newDiv.className= "class"+i;
		newDiv.style.width = "11.1%";
		newDiv.style.float = "left";
		newDiv.style.paddingBottom = "11.1%";
		newDiv.style.backgroundColor = getRandomColor();
		parent.appendChild(newDiv);
		switchAround();
}

function switchAround(){
		newDiv.style.backgroundColor = getRandomColor();

}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}