function microondas(prato, tempo){
    switch(prato){
        case 'pipoca':
            a(tempo,10);
            break;
        case 'macarrao':
            a(tempo,18)
             break;
        case 'carne':
            a(tempo,15)
            break;
        case 'feijao':
            a(tempo,12)
            break;
        case 'brigadeiro':
            a(tempo,8)
            break;
        default:
            console.log('prato inexiste');
    }
    function a(tempo,tempoIdeal){
        tempo<tempoIdeal? console.log("tempo insuficiente"):
        tempo>=tempoIdeal*2? console.log("comida queimou"):
        tempo>=tempoIdeal*3? console.log("kabumm"):
        console.log("Prato pronto, bom apetite!!!")
    }
}
microondas('pizaz',9)