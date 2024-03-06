function validateForm() {
    let pessoa = [];
    let idade = [];
    let indice = 0;
    let maior = 0;
    for (let i = 0; i < 5; i++) {
        let nome = String(prompt('Digite o nome:'));
        pessoa.push(nome);
        let id = parseInt(prompt('Digite a idade:'));
        idade.push(id);
    }
    for(let k = 1;k < idade.length; k++) {
        if(idade[k] > idade[maior]) {
            indice = k;
        }
    }
    alert(`A pessoa de maior idade é ${pessoa[indice]}`);
}