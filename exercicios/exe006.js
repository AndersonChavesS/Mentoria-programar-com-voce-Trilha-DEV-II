function validateForm() {
    let x = parseInt(document.forms['myForm']['fname1'].value);
    let y = parseInt(document.forms['myForm']['fname2'].value);
    if(x > y){
        alert(`${x} é maior que ${y}`);
        return false;
    }else if(y > x){
        alert(`${y} é maior que ${x}`);
        return false;
    }else{
        alert('Sáo iguais');
    }
}