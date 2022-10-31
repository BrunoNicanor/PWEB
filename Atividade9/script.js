var maior = function(x,y,z){   
    return Math.max(x,y,z);
}

var ordem = function(x,y,z){
    var x = Array(x,y,z);
    return x.sort(function(a,b){return a-b})
}

var a = parseInt(prompt("Primeiro número: "));
var b = parseInt(prompt("Segundo número: "));
var c = parseInt(prompt("Terceiro número: "));

document.write("\nMaior: " + maior(a,b,c));
document.write("\nOrdem: " + ordem(a,b,c));