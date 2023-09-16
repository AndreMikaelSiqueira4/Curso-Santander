var jogador1 = 0;
var jogador2 = 4;
var placar; 

 jogador1 != -1 && jogador2 != -1 ? console.log('Jogadores Válidos') : console.log('Jogadores Inválidos');
   if (jogador1 > 0) {
        console.log('Jogador 1 Marcou ponto');
        placar = jogador1 > jogador2
    } else if (jogador2 > 0) {
        console.log('Jogador2 Marcou ponto');
        placar = jogador2 > jogador1
    }  else {
        console.log('Ninguem Marcou ponto');
    } switch (placar) {
        case placar = jogador1 > jogador2:
            console.log('Jogador 1 GANHOU com '+ jogador1 , 'Ponto');
            break;
        case placar = jogador2 > jogador1:
            console.log('Jogador2 GANHOU com ' + jogador2 , 'Ponto');
            break;
            default:
    }

    
        