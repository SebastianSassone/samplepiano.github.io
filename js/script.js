// Color del body 

let body = document.getElementById('body');
body.style.backgroundColor = 'black';

// Boton inicio 

let play_button = document.getElementById('play_button')

play_button.addEventListener('click', () => {
  let section_piano = document.getElementById('section_piano');
  section_piano.style.display = 'block'
})

play_button.addEventListener('click', () => {
  let header = document.getElementById('header')
  header.style.display = 'none'
})

// Tabla de notas 

let button_ocultar_tabla = document.getElementById('button_ocultar_tabla');

button_ocultar_tabla.addEventListener('click', () => {
  let tabla_de_notas = document.getElementById('tabla_de_notas')
  let button_mostrar_tabla = document.getElementById('button_mostrar_tabla')
  tabla_de_notas.style.display = 'none'
  button_ocultar_tabla.style.display = 'none'
  button_mostrar_tabla.style.display = 'block'
})

let button_mostrar_tabla = document.getElementById('button_mostrar_tabla')

button_mostrar_tabla.addEventListener('click', () => {
  let tabla_de_notas = document.getElementById('tabla_de_notas')
  let button_ocultar_tabla = document.getElementById('button_ocultar_tabla');
  tabla_de_notas.style.display = 'block'
  button_ocultar_tabla.style.display = 'block'
  button_mostrar_tabla.style.display = 'none'
})

// Variables Samples c4

let even_tecla_DO4 = document.getElementById('even_tecla_DO4');
let even_tecla_RE4 = document.getElementById('even_tecla_RE4');
let even_tecla_MI4 = document.getElementById('even_tecla_MI4');
let even_tecla_FA4 = document.getElementById('even_tecla_FA4');
let even_tecla_SOL4 = document.getElementById('even_tecla_SOL4');
let even_tecla_LA4 = document.getElementById('even_tecla_LA4');
let even_tecla_SI4 = document.getElementById('even_tecla_SI4');

// Variables Samples c4 tecla negras

let tecla_negraD04 = document.getElementById('tecla_negraD04');
let tecla_negraRE4 = document.getElementById('tecla_negraRE4');
let tecla_negraFA4 = document.getElementById('tecla_negraFA4');
let tecla_negraSOL4 = document.getElementById('tecla_negraSOL4');
let tecla_negraLA4 = document.getElementById('tecla_negraLA4');

// Variables Samples c5

let even_tecla_DO5 = document.getElementById('even_tecla_DO5');
let even_tecla_RE5 = document.getElementById('even_tecla_RE5');
let even_tecla_MI5 = document.getElementById('even_tecla_MI5');

// Variables Samples c5 teclas negras 

let tecla_negraDO5 = document.getElementById('tecla_negraDO5');
let tecla_negraRE5 = document.getElementById('tecla_negraRE5');

// Evento click Samples c4
even_tecla_DO4.addEventListener('click', () => {
  let tecla = new Audio('song/Doc4.mp3')
  tecla.play();
})

even_tecla_RE4.addEventListener('click', () => {
  let tecla = new Audio('song/Rec4.mp3')
  tecla.play();
})
even_tecla_MI4.addEventListener('click', () => {
  let tecla = new Audio('song/Mic4.mp3')
  tecla.play()
})
even_tecla_FA4.addEventListener('click', () => {
  let tecla = new Audio('song/Fac4.mp3')
  tecla.play()
})
even_tecla_SOL4.addEventListener('click', () => {
  let tecla = new Audio('song/Solc4.mp3')
  tecla.play()
})
even_tecla_LA4.addEventListener('click', () => {
  let tecla = new Audio('song/Lac4.mp3')
  tecla.play()
})
even_tecla_SI4.addEventListener('click', () => {
  let tecla = new Audio('song/Sic4.mp3')
  tecla.play()
})

// Evento click Samples c4 teclas negras

tecla_negraD04.addEventListener('click', () => {
  let tecla = new Audio('song/DoN.mp3')
  tecla.play(); 
})
tecla_negraRE4.addEventListener('click', () => {
  let tecla = new Audio('song/ReN.mp3')
  tecla.play(); 
})
tecla_negraFA4.addEventListener('click', () => {
  let tecla = new Audio('song/FaN.mp3')
  tecla.play(); 
})
tecla_negraSOL4.addEventListener('click', () => {
  let tecla = new Audio('song/SolN.mp3')
  tecla.play(); 
})
tecla_negraLA4.addEventListener('click', () => {
  let tecla = new Audio('song/LaN.mp3')
  tecla.play(); 
})

// Evento click Samples c5

even_tecla_DO5.addEventListener('click', () => {
  let tecla = new Audio('song/Doc5.mp3')
  tecla.play()
} )
even_tecla_RE5.addEventListener('click', () => {
  let tecla = new Audio('song/ReC5.mp3')
  tecla.play()
} )
even_tecla_MI5.addEventListener('click', () => {
  let tecla = new Audio('song/Mic5.mp3')
  tecla.play()
} )

// Evento click Samples c5 teclas negras

tecla_negraDO5.addEventListener('click', () => {
  tecla = new Audio('song/DoNc5.mp3')
  tecla.play() 
}  )
tecla_negraRE5.addEventListener('click', () => {
  tecla = new Audio('song/ReNc5.mp3')
  tecla.play() 
}  )

// Evento keydown  Samples c4 

window.addEventListener('keydown', (e) =>{ 
  let teclado = e.key
  if(teclado == 'q'|| teclado == 'Q'){
    modificarTeclasBlancas(0) 
    let tecla = new Audio('song/Doc4.mp3')
    tecla.play()};
})
window.addEventListener('keydown', (e) => { 
  let teclado = e.key
  if(teclado == 'w'|| teclado == 'W'){
    modificarTeclasBlancas(1)
    let tecla = new Audio('song/Rec4.mp3')
    tecla.play();}
})
window.addEventListener('keydown', (e) => { 
  let teclado = e.key
  if(teclado == 'e'||teclado == 'E'){
    modificarTeclasBlancas(2)
    let tecla = new Audio('song/Mic4.mp3')
    tecla.play()}
})
window.addEventListener('keydown', (e) => { 
  let teclado = e.key
  if(teclado == 'r'|| teclado == 'R'){
    modificarTeclasBlancas(3)
    let tecla = new Audio('song/Fac4.mp3')
    tecla.play()}
})
window.addEventListener('keydown', (e) => { 
  let teclado = e.key
  if(teclado == 't'|| teclado == 'T'){
    modificarTeclasBlancas(4)
    let tecla = new Audio('song/Solc4.mp3')
    tecla.play()}
})
window.addEventListener('keydown', (e) => { 
  let teclado = e.key
  if(teclado ==  'y' || teclado == 'Y'){
    modificarTeclasBlancas(5)
    let tecla = new Audio('song/Lac4.mp3')
    tecla.play()}
})
window.addEventListener('keydown', (e) => { 
  let teclado = e.key
  if(teclado ==  'u'||teclado == 'U'){
    modificarTeclasBlancas(6)
    let tecla = new Audio('song/Sic4.mp3')
    tecla.play()}
})

// Evento keydown Samples c4 teclas negras

window.addEventListener('keydown', (e) => {
  let teclado = e.key 
  if (teclado == 2){
    modificarTeclasNegras(0)
    let tecla = new Audio('song/DoN.mp3')
    tecla.play();
  }
})
window.addEventListener('keydown', (e) => {
  let teclado = e.key 
  if (teclado == 3){
    modificarTeclasNegras(1)
  let tecla = new Audio('song/ReN.mp3')
  tecla.play();
  }
})
window.addEventListener('keydown', (e) => {
  let teclado = e.key 
  if (teclado == 5){
    modificarTeclasNegras(2)
    let tecla = new Audio('song/FaN.mp3')
    tecla.play();
  }
})
window.addEventListener('keydown', (e) => {
  let teclado = e.key 
  if (teclado == 6){
    modificarTeclasNegras(3)
    let tecla = new Audio('song/SolN.mp3')
    tecla.play();
  }
})
window.addEventListener('keydown', (e) => {
  let teclado = e.key 
  if (teclado == 7){
    modificarTeclasNegras(4)
    let tecla = new Audio('song/LaN.mp3')
    tecla.play();
  }
})

// Evento keydown  Samples c5

window.addEventListener('keydown', (e) => {
  let teclado = e.key 
  if(teclado == 'i'|| teclado == 'I'){   
    modificarTeclasBlancas(7)
    let tecla = new Audio('song/Doc5.mp3')
    tecla.play()
  }
})
window.addEventListener('keydown', (e) => {
  let teclado = e.key 
  if(teclado == 'o'|| teclado == 'O'){     
    modificarTeclasBlancas(8)
    let tecla = new Audio('song/ReC5.mp3')
    tecla.play()
  }
})
window.addEventListener('keydown', (e) => {
  let teclado = e.key 
  if(teclado == 'p'|| teclado == 'P'){     
    modificarTeclasBlancas(9)
    let tecla = new Audio('song/Mic5.mp3')
    tecla.play() 
  }
})

// Evento keydown Samples c5 teclas negras

window.addEventListener('keydown', (e) => {
  let teclado = e.key
  if(teclado == 9){
    modificarTeclasNegras(5)
    let tecla = new Audio('song/DoNc5.mp3')
    tecla.play() 
  }
})
window.addEventListener('keydown', (e) => {
  let teclado = e.key
  if(teclado == 0){
    modificarTeclasNegras(6)
    let tecla = new Audio('song/ReNc5.mp3')
    tecla.play()
  }
})

// Animacion evento keydown Teclas Blancas

function modificarTeclasBlancas(i){ 
    let teclas_blancas = document.querySelectorAll('.tecla');
    teclas_blancas[i].classList.add('teclas_blancas_ev');
    setTimeout( () => {teclas_blancas[i].classList.remove('teclas_blancas_ev')}, 220);             
}

// Animacion evento keydown Teclas Negras

function modificarTeclasNegras(i){ 
    let teclas_blancas = document.querySelectorAll('.teclas_negras');
    teclas_blancas[i].classList.add('teclas_negras_ev')
    setTimeout( () => {teclas_blancas[i].classList.remove('teclas_negras_ev')}, 220)        
}
