function validaForm() {
    let tempo = parseInt(document.forms['myForm']['fname'].value);
    let velocidade = parseInt(document.forms['myForm']['fname2'].value);
    let consumo = parseInt(document.forms['myForm']['fname3'].value);
    let valorCombustivel = parseInt(document.forms['myForm']['fname4'].value);

    if (tempo === "") {
        alert('Digite algo');
        return false;
    } else if (velocidade === "") {
        alert('Digite algo');
        return false;
    } else if (consumo === "") {
        alert('Digite algo');
        return false;
    } else if (valorCombustivel === "") {
        alert('Digite algo');
        return false;
    } else {
        let distancia = parseFloat(tempo * velocidade);
        let qtdCombustivel = parseFloat(distancia / consumo);
        let valorTotal = parseFloat(qtdCombustivel * valorCombustivel);
        alert(`Distância: ${distancia.toFixed(1)}km\nCombustível consumido: ${qtdCombustivel.toFixed(1)} litros\nTotal gasto: R$${valorTotal.toFixed(2)}`)
    }
}