const op = ["Pedra","Papel","Tesoura"];
var x;
var y;

do{
    x = parseInt(prompt("0 - Pedra | 1 - Papel | 2 - Tesoura | 3 - Sair"));
    y = Math.floor(Math.random() * 3);

    if (x != 3){
        if (x == y){
            alert("Empate\n\n\n\n" + "Você: " + op[x] + "\n" + "Máquina: " + op[y]);
        }
        else
            if((x == 0 && y == 2) || (x == 1 && y == 0) || (x == 2 && y == 1)){
                alert("Você ganhou!\n\n\n\n" + "Você: " + op[x] + "\n" + "Máquina: " + op[y]);
            }
            else{
                alert("Perdeu!\n\n\n\n" + "Você: " + op[x] + "\n" + "Máquina: " + op[y]);
        }
    }

}while(x != 3);

