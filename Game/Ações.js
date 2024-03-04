const heroi = document.querySelector('.Mário');
const cano = document.querySelector('.Cano');
const caixa = document.getElementById('centro');
var pontos = 0;
var marca_ponto = 1;

const pulo = () => {
    heroi.classList.add('pulo');

    setTimeout(()=>{
        heroi.classList.remove('pulo');
    },500);
}

const batida = setInterval(() => {
    const posicaoCano = cano.offsetLeft;
    const posicaoMario = +window.getComputedStyle(heroi).bottom.replace('px','');
    
    document.getElementById('pontuacao').innerHTML = pontos

    if (posicaoCano <= 120 && posicaoCano >0  && posicaoMario < 80){
        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        heroi.style.animation = 'none';
        heroi.style.bottom = `${posicaoMario}px`;

        heroi.src = './imagens/game-over.png';
        caixa.style.display = 'block';
        caixa.innerHTML = 'FIM DO JOGO  Pontos = '+pontos;
        caixa.innerHTML += '<br><input' type='button' value='Reiniciar'
         onclick='javascript:window.location.href=index.html'>;

    }else if (posicaoCano < 0 && marca_ponto == 1){
        pontos++;
        marca_ponto = 0;
    } else if (posicaoCano > 0){
        marca_ponto = 1;
    }

},20);
document.addEventListener('keydown',pulo);