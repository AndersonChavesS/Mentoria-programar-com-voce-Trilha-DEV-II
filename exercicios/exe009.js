function validateForm() {
    let valor = parseFloat(document.forms['myForm']['fname1'].value);
    let x = parseInt(document.forms['myForm']['fname2'].value);
    if (x === 1) {
        let qtdLitros = valor / 5.89;
        alert(`Gasolina: R$5,89 (litro)\nQuantidade abastecida: ${qtdLitros.toFixed(3)} litros `);
        return false;
    } else if (x === 2) {
        let qtdLitros = valor / 4.69;
        alert(`Gasolina: R$4,69 (litro)\nQuantidade abastecida: ${qtdLitros.toFixed(3)} litros `);
        return false;
    } else {
        alert('Opção Inválida');
    }
}