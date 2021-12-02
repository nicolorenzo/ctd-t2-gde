// const banco = {
//     clientes: [
//         [5486273622,'Corrente', 27771, 'Abigael Natte'],
//         [1183971869,'Conta Poupança', 8675, 'Ramon Connell'],
//         [9582019689,'Conta Poupança', 27363, 'Jarret Lafuente'],
//         [1761924656,'Conta Poupança', 32415, 'Ansel Ardley'],
//         [7401971607,'Conta Poupança', 18789, 'Jacki Shurmer'],
//         [630841470,'Conta Corrente', 28776, 'Jobi Mawtus'],
//         [4223508636,'Conta Corrente', 2177, 'Thomasin Latour'],
//         [185979521,'Conta Poupança', 25994, 'Lonnie Verheijden'],
//         [3151956165,'Conta Corrente', 7601, 'Alonso Wannan'],
//         [2138105881,'Conta Poupança', 33196, 'Bendite Huggett'],
//     ],
//     consultarCliente: function(nome) {
//         const upper = banco.clientes.map(name => name.toUpperCase());
//         console.log(upper)

//     }
// }
// const conta10 = new Conta(10,'Corrente', 10, 'Conta 10');
// // console.log(banco.clientes)
// banco.consultarCliente('conta 10')

// function Conta(numeroConta,tipoDeConta,saldo,titular) {
//     banco.clientes.push([this.numeroConta=numeroConta,this.tipoDeConta=tipoDeConta,this.saldo=saldo,this.titular=titular])
// }

function Conta(numeroConta,tipoDeConta,saldo,titular) {
    this.numeroConta = numeroConta;
    this.tipoDeConta = tipoDeConta;
    this.saldo = 'R$ '+saldo.toLocaleString();
    this.titular = titular;
}

const conta0 = new Conta(5486273622,'Corrente', 27771.5, 'Abigael Natte');
const conta1 = new Conta(1183971869,'Conta Poupança', 8675.45, 'Ramon Connell');
const conta2 = new Conta(9582019689,'Conta Poupança', 2736.3, 'Jarret Lafuente');
const conta3 = new Conta(1761924656,'Conta Poupança', 324.15, 'Ansel Ardley');
const conta4 = new Conta(7401971607,'Conta Poupança', 187.89, 'Jacki Shurmer');

let lista = [conta0,conta1,conta2,conta3,conta4];
const banco = {
    clientes: lista,
    consultarCliente: function(nome) {
        for(let cliente of this.clientes){
            if(nome == cliente.titular){
                return cliente
            }
        }
    },
    consultarConta: function(conta) {
        for(let cliente of this.clientes){
            if(conta == cliente.numeroConta){
                return cliente
            }
        }
    }

}

console.log(banco.consultarCliente('Abigael Natte'),banco.consultarConta('1183971869'))