var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pessoas = new Array("PEDRO","MARIA","JONAS");
for(var i = 0;i < pessoas.length; i++){
    var nome = pessoas[i].split('');
    var senha = 1;
    for(var j = 0;j < nome.length; j++){
        senha *= alfabeto.indexOf(nome[j]) + 1;
    }
    console.log(pessoas[i]+ " : "+ senha);
}