function validateForm() {
    let i = 0;
    let limite = 0;
    let razao = 0
    limite = Number(prompt('Digite o limite da PA'));
    razao = Number(prompt('Digite a razao da PA'));

    for (i = 0; i <= limite; i += razao) {
        alert(i);
    }

    if (isNaN(limite) || isNaN(razao) || (limite < razao)) {
        alert('PROGRAMA ENCERRADO!\nTente Novamente')
    }
}