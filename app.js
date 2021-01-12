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
		"backCover": "./images/renaissance/backCover.png",
		"frontCover": "./images/renaissance/frontCover.png"
	}
}

// Code starts

function purchase() {
	alert("Working!")
}

function changeCover(album) {
	var image = document.querySelector("section#"+album+" img");
	var button = document.querySelector("section#"+album+" .info #buttons #view")
	if(image.className=="front") {
		image.className="back";
		image.src = "./images/"+album+"/backCover.png"
		button.innerHTML = "View Front Cover"
	}
	else{
		image.className="front";
		image.src = "./images/"+album+"/frontCover.png"
		button.innerHTML = "View Back Cover"
	}		
}