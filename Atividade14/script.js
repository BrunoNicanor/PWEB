function Validar() {

    var opcao = document.forms.form.elements["Pesquisa"].value;

    if (document.forms.form.elements[0].value == "" || document.forms.form.elements[0].lenght < 10) {
        alert("Campo nome muito curto");
        document.forms.form.elements[0].focus();
        return false;
    }

    if (document.forms.form.elements[1].value == "" || document.forms.form.elements[1].value.indexOf('@') == -1 || document.forms.form.elements[1].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.form.elements[1].focus();
        return false;
    }

    if (document.forms.form.elements[2].value == "" || document.forms.form.elements[2].value.length < 20) {
        alert("É necessario preencher o campo MENSAGEM com mais de 20 caracteres!");
        document.getElementById("idMensagem").focus();
        return false;
    }

    if (opcao == "") {
        alert("Selecione uma opção");
        document.getElementById("Pesquisa").focus();
        return false;
    } else if (opcao == 0) {
        alert("Que bom que você voltou a visitar esta página!");
    } else if (opcao == 1) {
        alert("Volte sempre à está página!");
    }


    return true;
}