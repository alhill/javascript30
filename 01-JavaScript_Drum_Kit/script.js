function Pulsando(evnt){
	//console.log(evnt.keyCode);
	const tecla = document.querySelector('audio[data-key="${evnt.keyCode}"]');
	console.log(tecla);
}

window.addEventListener("keydown", Pulsando)

