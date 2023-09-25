let nome = prompt("Digite o nome do heroi: ")
let xp = prompt("Digite a quantidade de xp do heroi: ")
let elo = ""

switch (xp) {
    case xp <= 1000:
        elo = "Ferro"
        break;

    case xp <= 2000:
        elo = "Bronze";
        break;

    case xp <= 5000:
        elo = "Prata";
        break;
    
    case xp <= 7000:
        elo = "Ouro"
        break;
    
    case xp <= 8000:
        elo = "Platina"
        break;

    case xp <= 9000:
        elo = "Ascendente"
        break;
    
    case xp <= 10000:
        elo = "Imortal"
        break;


    default:
        elo = "Radiante"
        break;
}

console.log(`O Herói de nome ${nome} está no nível de ${elo}`);