function httpGetAsync(theUrl, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	}
	xmlHttp.open("GET", theUrl, true); // true for asynchronous
	xmlHttp.send(null);
}
function mover(response) {
	if (response == "yeah") {
		window.location.replace("https://app-dist.pencil.monster/2023FRCGameManual.pdf");
	}
}
httpGetAsync("https://RingedCurlyModes.linusskucas.repl.co", mover);
