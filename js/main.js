function log(value){

  const codUser = 0; 
  let text;

    if (codUser <= 0) {
      text = "O seu código de usuário é: ";
    } else {
      text = "Opção incorreta. Digite as opções 1,2 ou 3";
  }

console.log('O código de usuário é: ' + codUser);

}

log('log');