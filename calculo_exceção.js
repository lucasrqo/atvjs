alert('Bem vindo, vamos calcular ?')

const num1 = Number.prompt(parseFloat('Digite o primeiro número :'))
let op = prompt('Digite a operção:')
const num2 = Number.prompt(parseFloat('Digite o segundo número :'))

if (op === '+'){
 resul = num1 + num2
}else if(op === '-'){
 resul = num1 - num2
}else if(op === '*' || op === 'x'){
 resul = num1 * num2
}else if(op === '/'){
    resul= num1/num2
} try {
    op === '/' && num2,num1 === 0 
    console.log(resul)
} catch (error) {
    console.log("Erro:", error.message);
} finally {
    console.log('obrigado, pela preferência! O resultado é :', resul)
};