const nome = "Priscila";
let nome2 = "";
let pessoaDefault = {
    nome: "Priscila",
    idade: "33",
    trabalho: "Programadora"
}

let nomes = ["Priscila", "José", "Silva"];

let possoasListaVazia = [];

let pessoas = [
        {
            nome: "Priscila",
            idade: "25",
            trabalho: "Programadora"
        },
        {
            nome: "José",
            idade: "27",
            trabalho: "UX/UI Designer"
        }    
];


function alterarNome() {
    nome2 = "José";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(nomeNovo) {
    nome2 = nomeNovo;
    console.log("Valor alterado recenbendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);
}

function adcionarPessoa(pesssoa) {
    pessoas.push(pessoas);
}

function imprimirPessoas() {
    console.log("-----IMPRIMIR PESSOAS-----");
    pessoas.forEach((item) => {
       console.log("Nome:");
       console.log(item.nome);

        console.log("Idade:");
       console.log(item.idade);

       console.log("Trabalho:");
       console.log(item.trabalho);
    })}

imprimirPessoas();

adcionarPessoa({
    nome: "Silva",
    idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoas();
