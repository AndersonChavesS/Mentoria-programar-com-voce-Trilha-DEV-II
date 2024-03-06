function validateForm() {
    let contador = 0;
    let soma = 0;
    let numero = 0;
    numero = parseInt(prompt('Digite um número:'));
    while(numero !== 0) {
        soma += numero;
        contador++;
        numero = parseInt(prompt('Digite um número:')); 
    }
    alert(`Soma: ${soma}\nQuantidade de números: ${contador}`);
}