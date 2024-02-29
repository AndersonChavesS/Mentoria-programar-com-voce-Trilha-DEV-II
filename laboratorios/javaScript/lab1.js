var num1, num2, total = 0, i = 0;
do{
    num1 = parseInt(prompt("1º número:"));
}while(isNaN(num1));
do{
    num2 = parseInt(prompt("2º número:"));
}while(isNaN(num2) && (num2 < num1));
for(i = num2;i <= num1;i++){
    if(i % 2 === 0){
         total += i;
         
    }
    
}if(num2 > num1){
    console.log("O 2º número precisa ser menor que o 1º.\nPROGRAMA ENCERRADO!");
}
console.log("O resultado da soma dos pares entre "+num2+" e "+num1+" é: "+total);