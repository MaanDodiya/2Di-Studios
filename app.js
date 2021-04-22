// Down comes the list of albums and details
const data = {
	"Renaissance": {
		"name": "renaissance",
		"alias": "Renaissance",
		"artist": "Maan Dodiya",
		"duration": "29:35",
		"tracks": "9",
		"price": "6.69",
		"date": {
			"day": "2",
			"month": "1",
			"year": "21"
		},
		"description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, blanditiis alias! Deserunt earum veritatis possimus quasi, at ipsum eos sit, quisquam quos eius dicta, reprehenderit ullam accusamus. Beatae, repellendus minima?",
		"backCover": "./images/renaissance/backCover.jpg",
		"frontCover": "./images/renaissance/frontCover.jpg",
		"backCD" : "./images/renaissance/backCover.jpg",
		"frontCD": "./images/renaissance/frontCover.jpg"
	}
}

// Code starts

function purchase(albumName) {
	alert("Thanks for the Purchase!\nPress OK to download");
	var image = document.querySelector(`img.${albumName}.image-gallery.active`);
	var location = image.src.split(".");
	location[3] += "HQ";
	location[4] = "png";
	location = location.join(".");
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
		if(albumImgs[i].classList.length == 3) {
			albumImgs[i].classList.remove("active");
		}
	}
	element.className += " active";
	var bigPic = document.querySelector(`section.${album}`);
	bigPic.children[0].src = element.src;
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

		photoGallery.innerHTML = "<img class=\"image-gallery active\" onclick=\"changeInGallery(this)\"><img class=\"image-gallery\" onclick=\"changeInGallery(this)\"><img class=\"image-gallery\" onclick=\"changeInGallery(this)\"><img class=\"image-gallery\" onclick=\"changeInGallery(this)\">";
		photoGallery.children[0].src = element.frontCover;
		photoGallery.children[0].className = element.name + " " + photoGallery.children[0].className;
		photoGallery.children[1].src = element.backCover;
		photoGallery.children[1].className = element.name + " " + photoGallery.children[1].className;
		photoGallery.children[2].src = element.frontCD;
		photoGallery.children[2].className = element.name + " " + photoGallery.children[2].className;
		photoGallery.children[3].src = element.backCD;
		photoGallery.children[3].className = element.name + " " + photoGallery.children[3].className;

		section.appendChild(image);
		section.appendChild(infoDiv);
		section.appendChild(photoGallery);
		container.appendChild(section);
	}
}

init()
addContent()


/* Original hardcoded HTML Code

<!-- <section id="renaissance" id="renaissance">
        <img class="front" src="./images/renaissance/frontCover.jpg" alt="" />
        <div class="info">
          <div class="heading">Renaissance</div>
          <div class="released">Released 2/1/21</div>
          <div class="extrainfo">
            <span>Artist:</span> Maan Dodiya<br />
            <span>Tracks:</span> 9<br />
            <span>Length:</span> 29:35
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
            blanditiis alias! Deserunt earum veritatis possimus quasi, at ipsum
            eos sit, quisquam quos eius dicta, reprehenderit ullam accusamus.
            Beatae, repellendus minima?
          </p>
          <div class="buttons">
            <button class="purchase" onclick="purchase()">
              Purchase for $6.69
            </button>
            <button
              id="renaissance"
              class="view"
              onclick="changeCover(this.id)"
            >
              View Back Cover
            </button>
          </div>
        </div>
      </section> -->

*/