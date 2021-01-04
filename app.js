var URL = 'https://raw.githubusercontent.com/MaanDodiya/2di-studios/main/data.json'
	
async function getJSONData (url) {
	const response = await fetch(url);
	var data = await response.json();
	console.log(data);
}

getJSONData(URL);
