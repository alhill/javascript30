function Pulsando(evnt){
	//console.log(evnt.keyCode);
	const sonido = document.querySelector('audio[data-key="'+evnt.keyCode+'"]');
    const boton = document.querySelector('div[data-key="'+evnt.keyCode+'"]');
    boton.classList.add("seleccionada");
    sonido.currentTime = 0;
    sonido.play();
}

//INACABADA
/* function Soltando(evnt){
    const acabado = document.getElementsByClassName(".seleccionada");
    acabado.classList.remove("seleccionada");
} */

window.addEventListener("keydown", Pulsando)
window.addEventListener("transitionend", Soltando)


