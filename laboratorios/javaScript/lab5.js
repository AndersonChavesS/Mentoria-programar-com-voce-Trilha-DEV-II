var pessoa = new Object();
pessoa.idade = 25;
pessoa.sexo = "masculino";
pessoa.cidade = "Porto Velho";
pessoa.obterIdade = function () {
  return pessoa.idade;
};

console.log(pessoa.obterIdade());