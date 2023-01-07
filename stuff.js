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

const audio = new Audio("https://cloud-pba2emxos-hack-club-bot.vercel.app/0waiting-music-116216_audio.mp4");
audio.repeat = true;
audio.volume = 0;

document.getElementById( 'btn' ).onclick = e => {
  document.getElementById( 'splash' ).remove();
  audio.play().then( () => {
	audio.currentTime = 0;
	audio.volume = 1;
  });
};


function playAudio() {
  console.log('playing');
  audio.play();
}
function pauseAudio() {
  console.log('pausing');
  audio.pause();
}
function changeSrc() {
  console.log('changing src');
  audio.src = "https://dl.dropboxusercontent.com/s/okbnk1ycupxrrb2/_Sgt._Pepper%27s_Lonely_Hearts_Club_Band_by_the_Beatles_1967%20%281%29%20%28online-audio-converter.com%29.mp3";
  audio.play();
}
