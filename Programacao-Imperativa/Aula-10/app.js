function microondas(prato, tempo){
    switch(prato){
        case 'pipoca':
            tempoIdeal=10;
            break;
        case 'macarrao':
             tempoIdeal=18
             break;
        case 'carne':
            tempoIdeal=15
            break;
        case 'feijao':
            tempoIdeal=12
            break;
        case 'brigadeiro':
            tempoIdeal=8
            break;
        default:
            console.log('prato inexiste');
    }
    tempo<tempoIdeal? console.log("tempo insuficiente"):
    tempo>=tempoIdeal*2? console.log("comida queimou"):
    tempo>=tempoIdeal*3? console.log("kabumm"):
    tempoIdeal ?? 'aaa'
    console.log("Prato pronto, bom apetite!!!")
}
microondas('pizaz',9)