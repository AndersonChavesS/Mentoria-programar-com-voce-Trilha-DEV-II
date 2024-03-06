function validateForm() {
    let candidato = document.forms['myForm']['fname'].value;
    if (candidato == 'escolha') {
        alert('Escolha uma das opções!')
    } else if (candidato == 'Nulo') {
        alert('Voto computado com sucesso.');
    } else if (candidato == 'cancelar') {
        alert('Voto cancelado');
    } else {
        alert('Confirme seu voto: ');
        alert(`Voto em ${candidato} confirmado!`)
    }
}