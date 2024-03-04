function validateForm() {
    let x = parseInt(document.forms['myForm']['fname'].value);
    if(x === ""){
        alert('Digite algo');
        return false;
    }else{
        let y = x * x;
        alert(`${x}² = ${y}`);
    }
}