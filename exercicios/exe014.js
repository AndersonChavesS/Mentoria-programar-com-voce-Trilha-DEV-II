function validateForm() {
    let i = 0;
    let limite = 0;
    let razao = 0
    limite = parseInt(prompt('Digite o limite da PA'));
    razao = parseInt(prompt('Digite a razao da PA'));

    for (i = 0; i <= limite; i += razao) {
        alert(i);
    }
    if(limite < razao) {
        alert('Limite precisa ser maior que razão')
    }
}