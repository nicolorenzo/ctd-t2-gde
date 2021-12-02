function Pessoa(nome, altura, sexo) {
    this.nome = nome;
    this.altura = altura;
    this.sexo = sexo;
}

let pessoa1 = new Pessoa('Nico', 1.69, 'M');
let pessoa2 = new Pessoa('Rosa', 1.6, 'F');
let pessoa3 = new Pessoa('Dilma', 1.8, 'F');

module.exports = {
    grupo: [pessoa1, pessoa2, pessoa3],
    novaPessoa: function(nome, altura, sexo) {
        this.nome = nome;
        this.altura = altura;
        this.sexo = sexo;
    },
    mediaAlturaMulheres: function() {
        let somaMulheres = 0;
        let somaAltura = 0;
        for(let i =0; i<this.grupo.length; i++) {
            if(this.grupo[i].sexo == 'F'){
                somaMulheres++;
                somaAltura += this.grupo[i].altura;
            }
        }
        return 'A média de altura entre as mulheres é de: '+somaAltura/somaMulheres;
    },
    maiorAlturaMulheres: function() {
        let maiorAltura = 0;
        let maiorMulher=0;
        for(let i =0; i<this.grupo.length; i++) {
            if(this.grupo[i].sexo == 'F'){
                if(this.grupo[i].altura > maiorAltura){
                    maiorMulher = this.grupo[i].nome;
                    maiorAltura = this.grupo[i].altura
                }
            }
        }
        return console.log('A mulher mais alta é '+maiorMulher+ ' que tem '+maiorAltura+' metros');
    },
    menorAlturaMulheres: function() {
        let menorAltura = 0;
        let menorMulher = 0;
        for(let i =0; i<this.grupo.length; i++) {
            if(this.grupo[i].sexo == 'F'){
                menorAltura = this.grupo[i].altura;
                for(let i =0; i<this.grupo.length; i++) {
                    if(this.grupo[i].sexo == 'F' && this.grupo[i].altura < menorAltura){
                        menorMulher = this.grupo[i].nome;
                        menorAltura = this.grupo[i].altura;
                    }
        
                }
            }
        }

        return console.log('A mulher mais baixa é '+menorMulher+ ' que tem '+menorAltura+' metros');
    }

}