function validaDateForm() {
    let capital = parseFloat(document.forms['myForm']['fname'].value);
    let txJuros = parseFloat(document.forms['myForm']['fname2'].value);
    let meses = parseInt(document.forms['myForm']['fname3'].value);
    if(capital === ""){
        alert('Digite o valor do capital inicial');
        return false;
    }else if(txJuros === ""){
        alert('Digite o valor da taxa de juros');
        return false;
    }else if(meses === ""){
        alert('Digite a quantidade de meses');
        return false;
    }else{
        let juros = parseFloat((capital * (txJuros/100)) * meses);
        let capitalTotal = capital + juros;
        alert(`Capital Inicial: R$${capital.toFixed(2)}\ntaxa de Juros aplicada: ${txJuros.toFixed(1)}%\nPeríodo da aplicação: ${meses} mes(es)\nCapital total no fim do  período: R$${capitalTotal.toFixed(2)}`)
    }
}