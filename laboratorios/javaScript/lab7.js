function gerarNomeCompleto(){
let nomeComp = document.getElementById('nomeCompleto');
let nome = document.getElementById('nome').value;
let sobreNome = document.getElementById('sobrenome').value;
nomeComp.innerHTML = `Nome Completo: ${sobreNome.toUpperCase()}, ${nome}`;
}
let el = document.getElementById('gerar');el.addEventListener('click',gerarNomeCompleto);