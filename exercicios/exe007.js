function validateForm() {
    let m1 = parseFloat(document.forms['myForm']['fname1'].value);
    let m2 = parseFloat(document.forms['myForm']['fname2'].value);
    let m3 = parseFloat(document.forms['myForm']['fname3'].value);
    let media = ((m1 * 3) + (m2 * 3) + (m3 * 4)) / 10;
    if (media >= 6) {
        alert(`1ª média: ${m1.toFixed(1)}\n2ª média: ${m2.toFixed(1)}\n3ª média: ${m3.toFixed(1)}\nMédia Final: ${media.toFixed(1)}\nAPROVADO`);
        return false;
    } else {
        alert(`1ª média: ${m1.toFixed(1)}\n2ª média: ${m2.toFixed(1)}\n3ª média: ${m3.toFixed(1)}\nMédia Final: ${media.toFixed(1)}\nREPROVADO`);
        return false;

    }
}