function modificar(){
    var txt = document.getElementById("texto").value;
    var mai = document.getElementById("maiuscula");
    var min = document.getElementById("minuscula");

    if(mai.checked == true && min.checked == true)
        return alert("Marque somente uma das opções!");
        
        else if(mai.checked == false && min.checked == false)
            return alert("Marque apenas uma das opções!");
        else if(mai.checked == true)
            return document.getElementById("Resultado").value = txt.toUpperCase(); 
        else if(min.checked == true)
            return document.getElementById("Resultado").value = txt.toLowerCase(); 
    
}