let a =[5, 8, 4, 9, 5];
let b =[8, 7, 8, 6, 8];
let c =[7, 5, 10, 8, 3];

function media(participante){
    let soma =0;
    for(let i=0;i<participante.length;i++){
        soma += participante[i];
    }
    return soma/participante.length;
}

function pontuacaoMaior(participante){
    let maior =0;
    for(let i=0;i<participante.length;i++){
        if(participante[i]>maior){
            maior = participante[i]
        }
    }
    return maior;
}

function melhorMedia(a,b,c){
    if(media(a)>media(b)&&media(a)>media(c)) {
        console.log('A melhor média é da equipe A que fez '+media(a)+' Pontos');
    } else if(media(b)>media(a)&&media(b)>media(c)) {
        console.log('A melhor média é da equipe B que fez '+media(b)+' Pontos');
    } else if(media(c)>media(b)&&media(c)>media(a)) {
        console.log('A melhor média é da equipe C que fez '+media(c)+' Pontos');
    }
}
function competicao(a,b,c){
    if(pontuacaoMaior(a)>pontuacaoMaior(b)&&pontuacaoMaior(a)>pontuacaoMaior(c)) {
        console.log('A maior pontuação é da equipe A que fez '+pontuacaoMaior(a)+' Pontos');
    } else if(pontuacaoMaior(b)>pontuacaoMaior(a)&&pontuacaoMaior(b)>pontuacaoMaior(c)) {
        console.log('A maior pontuação é da equipe B que fez '+pontuacaoMaior(b)+' Pontos');
    } else if(pontuacaoMaior(c)>pontuacaoMaior(b)&&pontuacaoMaior(c)>pontuacaoMaior(a)) {
        console.log('A maior pontuação é da equipe C que fez '+pontuacaoMaior(c)+' Pontos');
    }

    return melhorMedia(a,b,c)
}
competicao(a,b,c)