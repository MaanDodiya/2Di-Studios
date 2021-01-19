// Down comes the list of albums and details
const data = {
	"Renaissance": {
		"name": "renaissance",
		"date": {
			"day": "2",
			"month": "1",
			"year": "21"
		},
		"price": "6.69",
		"description": " ",
		"backCover": "./images/renaissance/backCover.jpg",
		"frontCover": "./images/renaissance/frontCover.jpg"
	}
}

// Code starts

function purchase() {
	alert("Working!")
}

function changeCover(album) {
	var image = document.querySelector("section#"+album+" img");
	var button = document.querySelector("section#"+album+" .info .buttons .view")
	if(image.className=="front") {
		image.className="back"
		image.src = "./images/"+album+"/backCover.jpg"
		button.innerHTML = "View Front Cover"
	}
	else{
		image.className="front"
		image.src = "./images/"+album+"/frontCover.jpg"
		button.innerHTML = "View Back Cover"
	}		
}

function init() {
	var items = document.querySelectorAll(".navbar a");
	for (let i = 0; i < items.length; i++) {
		const element = items[i];
		element.onclick = function() {
			focus(element);
		}
	}
}

function focus(item) {
	var items = document.querySelectorAll(".navbar a");
	for (let i = 0; i < items.length; i++) {
		const element = items[i];
		element.className = "";
	}
	item.className="select";
	return true;
}

init()