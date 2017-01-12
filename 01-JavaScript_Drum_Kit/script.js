function Pulsando(evnt){
    const sonido = document.querySelector('audio[data-key="'+evnt.keyCode+'"]');
	const boton = document.querySelector('.button[data-key="'+evnt.keyCode+'"]');
	boton.classList.add("seleccionada");
	sonido.currentTime = 0;
	sonido.play();
}

function Soltando(evnt){
    if(evnt.propertyName == "transform"){
        this.classList.remove("seleccionada");
    }
}

window.addEventListener("keydown", Pulsando);

document.addEventListener("DOMContentLoaded", function(event) { 
    const teclas = document.querySelectorAll('.button');
    teclas.forEach(item => item.addEventListener("transitionend", Soltando));
});






