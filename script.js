let video = document.getElementById("video1");


// Função Retroceder
function undo() {
    video.currentTime -= 15;
}

// Função Avançar
function redo() {
    video.currentTime += 15;
}

// Função Diminuir Velocidade
function minus() {
    video.playbackRate -= 0.1;
}

// Função Aumentar Velocidade
function plus() {
    video.playbackRate += 0.1;
}

// Função Iniciar Vídeo
function play() {
    video.play();    
}

// Função Pausar Vídeo
function stop() {
    video.pause();
    video.currentTime = 0;
}

let controls = document.getElementsByClassName('controller')[0];

controls.addEventListener('mouseover',function(){
    controls.style.opacity = '1';
})    

controls.addEventListener('mouseout',function(){
    controls.style.opacity = '0';
})