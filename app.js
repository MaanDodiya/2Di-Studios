// Down comes the list of albums and details
const data = {
	"renaissance": {
		"name": "renaissance",
		"alias": "Renaissance",
		"artist": "Maan Dodiya",
		"duration": "29:35",
		"tracks": "9",
		"price": "6.69",
		"date": {
			"day": "2",
			"month": "1",
			"year": "21",
		},
		"description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, blanditiis alias! Deserunt earum veritatis possimus quasi, at ipsum eos sit, quisquam quos eius dicta, reprehenderit ullam accusamus. Beatae, repellendus minima?",
		"backCover": "./images/renaissance/backCover.jpg",
		"backCoverSmol": "./images/renaissance/backCover-smol.jpg",
		"backCoverHQ": "./images/renaissance/backCover-HQ.png",
		"frontCover": "./images/renaissance/frontCover.jpg",
		"frontCoverSmol": "./images/renaissance/frontCover-smol.jpg",
		"frontCoverHQ": "./images/renaissance/frontCove-HQ.png",
		"image3" : "./images/renaissance/CD.jpg",
		"image3Smol" : "./images/renaissance/CD-smol.jpg",
		"image3HQ" : "./images/renaissance/CD-HQ.png",
		"image4": "./images/renaissance/record.jpg",
		"image4Smol": "./images/renaissance/record-smol.jpg",
		"image4HQ": "./images/renaissance/record-HQ.png",
		"image5": "./images/renaissance/floppy.jpg",
		"image5Smol": "./images/renaissance/floppy-smol.jpg",
		"image5HQ": "./images/renaissance/floppy-HQ.png"
	}
}

// Code starts

function purchase(albumName) {
	alert("Thanks for the Purchase!\nPress OK to download");
	var image = document.querySelector(`img.${albumName}.image-gallery.active`);
	var temp = image.src.split("/");
	var album = temp[temp.length-2];
	var type = temp[temp.length-1].split("-")[0];
	var location = `./images/${album}/${type}-HQ.png`
	window.open(location);
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

function changeInGallery(element) {
	var album = element.classList[0];
	var albumImgs = document.querySelectorAll(`img.${album}`);
	for (let i = 0; i < albumImgs.length; i++) {
		if(albumImgs[i].classList.length == 4) {
			albumImgs[i].classList.remove("active");
		}
	}
	var bigPic = document.querySelector(`section.${album}`);
	var image = element.classList;
	image = image[image.length-1];
	bigPic.children[0].src = data[album][image];
	element.className += " active";

}

function addContent() {
	var container = document.querySelector("#container");
	for (let i = 0; i < Object.keys(data).length; i++) {
		const element = data[Object.keys(data)[i]];

		var section = document.createElement("section");
		section.className = element.name;

		var image = document.createElement("img");
		image.className = "front album-image";
		image.src = element.frontCover;
		image.height = "540";
		image.width = "540";

		var infoDiv = document.createElement("div");
		infoDiv.className = "info";

		infoDiv.innerHTML = "<div class=\"heading\"></div><div class=\"released\">Released&nbsp;</div><div class=\"extrainfo\"><span>Artist:</span>&nbsp;" + element.artist + "<br /><span>Tracks:</span>&nbsp;" + element.tracks + "<br /><span>Length:</span>&nbsp" + element.duration + "</div>";

		infoDiv.innerHTML += "<p>" + element.description + "</p><div class=\"buttons\"><button class=\"" + data[Object.keys(data)[i]].name +  " purchase\" onclick=\"purchase(this.classList[0])\">Purchase for $" + element.price;

		infoDiv.children[0].innerHTML += element.alias;
		infoDiv.children[1].innerHTML += element.date.day + "/" + element.date.month + "/" + element.date.year;

		var photoGallery = document.createElement("div");
		photoGallery.className = "photo-gallery";

		photoGallery.innerHTML = "<img onclick=\"changeInGallery(this)\"><img onclick=\"changeInGallery(this)\"><img onclick=\"changeInGallery(this)\"><img onclick=\"changeInGallery(this)\"><img onclick=\"changeInGallery(this)\">";
		
		photoGallery.children[0].classList.add(element.name);
		photoGallery.children[0].classList.add("image-gallery");
		photoGallery.children[0].classList.add("frontCover");
		photoGallery.children[0].classList.add("active");
		photoGallery.children[0].src = element.frontCoverSmol;
		
		photoGallery.children[1].classList.add(element.name);
		photoGallery.children[1].classList.add("image-gallery");
		photoGallery.children[1].classList.add("backCover");
		photoGallery.children[1].src = element.backCoverSmol;
		
		photoGallery.children[2].classList.add(element.name);
		photoGallery.children[2].classList.add("image-gallery");
		photoGallery.children[2].classList.add("image3");
		photoGallery.children[2].src = element.image3Smol;
		
		photoGallery.children[3].classList.add(element.name);
		photoGallery.children[3].classList.add("image-gallery");
		photoGallery.children[3].classList.add("image4");
		photoGallery.children[3].src = element.image4Smol;
		
		photoGallery.children[4].classList.add(element.name);
		photoGallery.children[4].classList.add("image-gallery");
		photoGallery.children[4].classList.add("image5");
		photoGallery.children[4].src = element.image5Smol;
		

		section.appendChild(image);
		section.appendChild(infoDiv);
		section.appendChild(photoGallery);
		container.appendChild(section);
	}
}

init()
addContent()