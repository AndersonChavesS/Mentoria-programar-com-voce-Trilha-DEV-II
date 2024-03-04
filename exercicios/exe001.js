function validaDateForm() {
    let x = parseInt(document.forms['myForm']['fname'].value);
    if (x === "") {
        alert("digite algo");
        return false;
    }else {
        y = x + 1;
        z = x - 1;
        alert(`Número digitado: ${x}\n Antecessor: ${z}\nSucessor: ${y}`);
    }
}