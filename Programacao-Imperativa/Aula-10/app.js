function microondas(prato, tempo){
    switch(prato){
        case 'pipoca':
            mensagem(tempo,10);
            break;
        case 'macarrao':
            mensagem(tempo,18)
             break;
        case 'carne':
            mensagem(tempo,15)
            break;
        case 'feijao':
            mensagem(tempo,12)
            break;
        case 'brigadeiro':
            mensagem(tempo,8)
            break;
        default:
            console.log('prato inexiste');
    }
    function mensagem(tempo,tempoIdeal){
        tempo<tempoIdeal? console.log("tempo insuficiente"):
        tempo>=tempoIdeal*2? console.log("comida queimou"):
        tempo>=tempoIdeal*3? console.log("kabumm"):
        console.log("Prato pronto, bom apetite!!!")
    }
}
microondas('carne',9)