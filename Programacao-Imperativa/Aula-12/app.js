const alicia = [23,69,32];
const bob = [12,69,43];

function encontrarGanhador (participante1,participante2){
    let pontosPrimeiroParticipante =0;
    let pontosSegundoParticipante = 0;
    for(i = 0; i<participante1.length; i++) {
        if(participante1[i]>participante2[i]) {
            pontosPrimeiroParticipante++
        } else if(participante1[i]<participante2[i]) {
            pontosSegundoParticipante++
        }
    }
    if(pontosSegundoParticipante>pontosPrimeiroParticipante){
        return "participante 2"
    } else if(pontosPrimeiroParticipante==pontosSegundoParticipante) {
        return "Empate"
    } else {
        return "participante 1"
    }
}

function digitalHouse(a,b) {
    for(let i=1; i<101; i++){
        if(i%a==0&&i%b==0){
            console.log('Digital House')
        } else if(i%a==0) {
            console.log('Digital')
        } else {
            console.log('House')
        }
    }
}
digitalHouse(1,2)
