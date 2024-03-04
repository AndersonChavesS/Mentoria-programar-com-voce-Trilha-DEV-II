function validaForm() {
    let x = parseInt(document.forms["myForm"]["fname"].value);
    let y = parseInt(document.forms["myForm"]["fname2"].value);
    let z = parseInt(document.forms["myForm"]["fname3"].value);
    if (x == "") {
        alert("Digite algo");
        return false;
    } else if (y == "") {
        alert("Digite algo");
        return false;
    } else if (z == "") {
        alert("Digite algo");
        return false;
    } else {
        let media = parseFloat((x + y + z) / 3);
        alert(`A média é ${media.toFixed(2)}`);
    }
}