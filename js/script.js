window.addEventListener("keydown", function (press) {
	var audio = document.querySelector(`audio[data-key="${press.keyCode}"]`);
	var key = document.querySelector(`div[data-key="${press.keyCode}"]`);
    
	// playing audio
	if (!audio) {
		return;
	}
	audio.play();
	
	// adding transition
	key.classList.add("playing");
	setTimeout(function () {
		key.classList.remove("playing");
	}, 100);
	
	// reapeating multiple times
	audio.currentTime = 0;
});