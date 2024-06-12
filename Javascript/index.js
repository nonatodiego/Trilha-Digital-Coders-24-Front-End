const prompt = require("readline-sync");

const idade = Number(prompt.question('Qual a sua idade? '));

const maiorDeIdade = idade >= 18;

// Estrutura condicional: if/else

if(maiorDeIdade) {
  console.log('Você é maior de idade');
} else {          
  console.log('Você é menor de idade');
}

// Muito útil quando sua variável possui valores específicos

const permissoes =  'aluno'

switch(permissoes) {
    case 'aluno':
        console.log('Você só pode visualizar o conteúdo');
        break;
    case 'professor':
        console.log('Você pode visualizar e editar o conteúdo');
        break;
    case 'admin':
        console.log('Você pode visualizar, editar e excluir o conteúdo');
        break;
    default:
        console.log('Você não possui permissão para acessar o conteúdo');            
}