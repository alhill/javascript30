window.addEventListener("keydown",	function Pulsando(evnt){
	const sonido = document.querySelector('audio[data-key="'+evnt.keyCode+'"]');
	const boton = document.querySelector('.button[data-key="'+evnt.keyCode+'"]');
	boton.classList.add("seleccionada");
	sonido.currentTime = 0;
	sonido.play();
	const teclas = document.querySelectorAll('.button');
	teclas.forEach(function(item){
		console.log(item);
		console.log(boton);
		item.addEventListener("transitionend", function(item){
			boton.classList.remove("seleccionada");
		});
	});
	
});







