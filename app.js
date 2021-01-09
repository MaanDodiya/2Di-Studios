var URL = 'https://raw.githubusercontent.com/MaanDodiya/2di-studios/main/data.json'
	
async function getJSONData (url) {
	const response = await fetch(url);
	const data = await response.json();
	return data
	// console.log(data);
}

async function show() {
	const data = await getJSONData(URL)
	console.log(data)
}
 show()