const pessoas = 45;
var idade, sexo, opniao = 0, cont = 0;
var mediaIdade = 0 ,maisVelha = 0,maisNova = 99999,qtdPes = 0, porcenBomOti = 0, numHom = 0,numMul = 0;

do{

    idade = parseInt(prompt("Pessoa " + (cont +1) + "\nQual sua idade?"))
    sexo = prompt("Pessoa " + (cont +1) + "\nDigite seu sexo [M/F]: ")
    
    do{
        opniao = parseInt(prompt("Pessoa " + (cont +1) + 
        "\nO que achou do filme?\n1 - Péssimo | 2 - Recular | 3 - Bom | 4 - Ótimo"))
    }while(opniao < 1 || opniao > 4);

    mediaIdade += idade;

    if(idade > maisVelha){
        maisVelha = idade;
    }

    if(idade < maisNova){
        maisNova = idade;
    }

    if(opniao == 1){
        qtdPes++;
    }

    if (opniao == 3 || opniao == 4){
        porcenBomOti++;
    }

    if(sexo == "M" || sexo == "m"){
        numHom++;
    }

    if(sexo == "F" || sexo == "f"){
        numMul++;
    }

    cont++;

}while (cont < pessoas);

mediaIdade /= pessoas;
porcenBomOti = (porcenBomOti * 100)/pessoas;


document.write("Média idade: " + parseFloat(mediaIdade).toFixed(2) + "<br>" + "Mais velha: " + maisVelha + 
"<br>" + "Mais nova: " + maisNova + "<br>" + "Qtd Péssimo: " + qtdPes + "<br>" + "Ótimo ou bom: " + 
parseFloat(porcenBomOti).toFixed(0) + "%"+ "<br>" + "Homens: " + numHom + "<br>" + "Mulheres: " + numMul)