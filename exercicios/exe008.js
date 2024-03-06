function validateForm(){
    let peso = parseFloat(document.forms['myForm']['fname1'].value);
    let altura = parseFloat(document.forms['myForm']['fname2'].value);
    let imc = peso/ (altura * altura);
    if(imc < 20){
        alert(`Peso: ${peso.toFixed(3)}kg\nAltura: ${altura.toFixed(2)}m\nIMC: ${imc.toFixed(1)}\nABAIXO DO PESO`);
        return false;
    }else if(imc >= 20 && imc <= 30){
        alert(`Peso: ${peso.toFixed(3)}kg\nAltura: ${altura.toFixed(2)}m\nIMC: ${imc.toFixed(1)}\nPESO IDEAL`);
        return false;
    }else{
        alert(`Peso: ${peso.toFixed(3)}kg\nAltura: ${altura.toFixed(2)}m\nIMC: ${imc.toFixed(1)}\nACIMA DO PESO`);
    }
}