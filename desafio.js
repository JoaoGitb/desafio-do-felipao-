function calcularNivel(vitoria, derrotas){
    const saldoVitorias = vitorias - derrotas;
    let nivel; 


    if (vitorias < 10){
        nivel = "ferro";
    }else if (vitorias >= 10 && vitorias <=20 ){
        nivel = "bronze";
    }else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "prata";
    }else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "ouro";
    }else if (vitorias >=81 && vitorias <= 90) {
        nivel = "diamante";
    }else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "lendario";
    } else { 
        nivel = "imortal";
    }
    const menssagem = 'o heroi tem saldo de ${saldoVitorias} esta no nivel de ${nivel}';
    return menssagem;


}
const vitorias = 70;
const derrotas = 20;
const resultado = calcularNivel(vitorias, derrotas);
console.log(resultado);
