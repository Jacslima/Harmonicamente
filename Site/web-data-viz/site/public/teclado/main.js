var listaDeAudios = [
  'sons/TeclasPretas/0.mp3', 'sons/TeclasPretas/1.mp3', 'sons/TeclasPretas/2.mp3', 'sons/TeclasPretas/3.mp3', 'sons/TeclasPretas/4.mp3', 'sons/TeclasPretas/5.mp3', 'sons/TeclasPretas/6.mp3', 
  'sons/TeclasPretas/7.mp3','sons/TeclasPretas/8.mp3', 'sons/TeclasPretas/9.mp3', 'sons/TeclasPretas/10.mp3', 'sons/TeclasPretas/11.mp3', 'sons/TeclasPretas/12.mp3', 'sons/TeclasPretas/13.mp3', 
  'sons/TeclasBrancas/C.mp3', 'sons/TeclasBrancas/D.mp3', 'sons/TeclasBrancas/E.mp3', 'sons/TeclasBrancas/F.mp3', 'sons/TeclasBrancas/G.mp3', 'sons/TeclasBrancas/A.mp3', 'sons/TeclasBrancas/B.mp3', 
  'sons/TeclasBrancas/C2.mp3','sons/TeclasBrancas/D2.mp3', 'sons/TeclasBrancas/E2.mp3', 'sons/TeclasBrancas/F2.mp3', 'sons/TeclasBrancas/G2.mp3', 'sons/TeclasBrancas/A2.mp3', 'sons/TeclasBrancas/B2.mp3', 
  'sons/TeclasBrancas/C3.mp3', 'sons/TeclasBrancas/D3.mp3', 'sons/TeclasBrancas/E3.mp3', 'sons/TeclasBrancas/F3.mp3', 'sons/TeclasBrancas/G3.mp3', 'sons/TeclasBrancas/A3.mp3', 'sons/TeclasBrancas/B3.mp3'
]; //Armazena os aúdios das notas

var teclas = [
  '1', '2', '3', '4', '5', '6', '7', '8',
  '9', '0', 'Q', 'W', 'E', 'R', 'U', 'I',
  'O', 'P', 'A', 'S', 'D',
  'F', 'G', 'H', 'J', 'K', 'L', 'Ç', 'Z',
  'X', 'C', 'V', 'B', 'N', 'M'
]; // Armazena as teclas correspondetes do teclado e notebook
var posicaoDoAudio; //Guarda a posição do áudio 


document.addEventListener('keydown', function (event) { //Verifica qual tecla eu apertei
  var teclaPressionada = event.key.toUpperCase(); //Guarda essa tecla em uma variavél
  alterarEstiloTecla(true, teclaPressionada);

  for (var posicao = 0; posicao < teclas.length; posicao++) {
    if (teclaPressionada === teclas[posicao]) { //Verifica se essa tecla exite no meu vetor (Teclas)
      posicaoDoAudio = posicao; //Guarda essa posição na minha varivél
      break; //Encerra o for
    }
  }

  tocarSom();
});

document.addEventListener('keyup', function (event) { //Verifica a tecla que foi solta
  var teclaPressionada = event.key.toUpperCase(); // Guarda na variavel
  alterarEstiloTecla(false, teclaPressionada);

  for (var posicao = 0; posicao < teclas.length; posicao++) {
    if (teclaPressionada === teclas[posicao]) {
      posicaoDoAudio = posicao;
      break;
    }
  }
});


function tocarSom() {
  var audioSelecionado = listaDeAudios[posicaoDoAudio]; // Guarda o audio que  está na mesma posição da tecla
  if (audioSelecionado) {
    var audio = new Audio(audioSelecionado);
    audio.play(); // Envia o audio
  }
}

// Função adicionada para alterar o estilo da tecla com base no estado (pressionada ou solta)
function alterarEstiloTecla(teclaPressionada, tecla) {
  var teclaId = 'tecla-' + tecla;
  var teclaElement = document.getElementById(teclaId);

  if (teclaElement) {
    if (teclaPressionada) {
      teclaElement.style.backgroundColor = 'lightgrey'; // Altera a cor de fundo para cinza claro
      teclaElement.style.transform = 'translateY(5px)'; // Desloca a tecla para baixo
    } else {
      teclaElement.style.backgroundColor = ''; // Restaura a cor de fundo padrão
      teclaElement.style.transform = ''; // Remove o deslocamento
    }
  }
}