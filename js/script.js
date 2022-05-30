// IMPLEMENTAR LUEGO
/*
const buscador = document.querySelector('.buscador');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

function buscar(){
    document.querySelector('.buscador').classList.toggle('active');
    input.focus();
}

document.querySelector('.btn').onclick = function(){
    buscar();
}

let rec;
    if (!("webkitSpeechRecognition" in window)) {
        alert("disculpas, no puedes usar la API");
    } else {
        rec = new webkitSpeechRecognition();
        rec.lang = "es-AR";
        rec.continuous = true;
        rec.interim = true;
        rec.addEventListener("result",iniciar);
    }
function iniciar(event){
	for (let i = event.resultIndex; i < event.results.length; i++){
        document.querySelector('.input').innerHTML = event.results[i][0].transcript;
	}
}

rec.start();
*/