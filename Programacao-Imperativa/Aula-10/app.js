let pronto = 'Prato pronto, bom apetite!!!';
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
            console.log('prato inexiste\n'+pronto);
    }
    function mensagem(tempo,tempoIdeal){
        tempo>=tempoIdeal*3? console.log("kabumm\n"+pronto):
        tempo<tempoIdeal? console.log("tempo insuficiente\n"+pronto):
        tempo>=tempoIdeal*2? console.log("comida queimou\n"+pronto):
        console.log(pronto)
    }
}
microondas('carne',10)
microondas('carne',15)
microondas('carne',30)
microondas('carne',45)
microondas('pizza',45)