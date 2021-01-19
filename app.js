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
		"frontCover": "./images/renaissance/frontCover.jpg"
	}
}

// Code starts

function purchase() {
	alert("Thanks for the Purchase!");
}

function changeCover(album) {
	var image = document.querySelector("section#"+album+" img");
	var button = document.querySelector("section#"+album+" .info .buttons .view");
	if(image.className=="front") {
		image.className="back";
		image.src = "./images/"+album+"/backCover.jpg";
		button.innerHTML = "View Front Cover";
	}
	else{
		image.className="front";
		image.src = "./images/"+album+"/frontCover.jpg";
		button.innerHTML = "View Back Cover";
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

function addContent() {
	var container = document.querySelector("#container");
	// console.log(Object.keys(data).length);
	for (let i = 0; i < Object.keys(data).length; i++) {
		const element = data[Object.keys(data)[i]];

		var section = document.createElement("section");
		section.id = element.name;
		section.className = element.name;

		var image = document.createElement("img");
		image.className = "front";
		image.src = element.frontCover;

		var infoDiv = document.createElement("div");
		infoDiv.className = "info";

		infoDiv.innerHTML = "<div class=\"heading\"></div><div class=\"released\">Released&nbsp;</div><div class=\"extrainfo\"><span>Artist:</span>&nbsp;" + element.artist + "<br /><span>Tracks:</span>&nbsp;" + element.tracks + "<br /><span>Length:</span>&nbsp" + element.duration + "</div>"

		infoDiv.innerHTML += "<p>" + element.description + "</p><div class=\"buttons\"><button class=\"purchase\" onclick=\"purchase()\">Purchase for $" + element.price + "</button><button id=\"" + element.name + "\" class=\"view\" onclick=\"changeCover(this.id)\">View Back Cover</button></div>"

		infoDiv.children[0].innerHTML += element.alias;
		infoDiv.children[1].innerHTML += element.date.day + "/" + element.date.month + "/" + element.date.year;

		section.appendChild(image);
		section.appendChild(infoDiv);
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