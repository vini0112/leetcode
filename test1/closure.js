
// FUNCAO SIMPLES
// function outer(){
//     let state = 'state'
//     return function(){
//         console.log(`Hello ${state}`)
//     }
// }
// const funct = outer()
// funct()


// MULTIPLICADOR

// function multiplicador(fator){
//     return function(numero){
//         return numero * fator
//     }
// }

// const multiplicar = multiplicador(2)
// const triplicar = multiplicador(3)
// console.log(multiplicar(5))
// console.log(triplicar(5))



function contaBancaria(){
    let saldo = 1000

    return{

        verSaldo: function(){
            return `Seu saldo: ${saldo}`
        },

        depositar: function(deposito){
            saldo += deposito
        },

        sacar: function(valorSacar){
            if(valorSacar > saldo){
                console.log('Saldo Insuficiente!')
            }
            saldo -= valorSacar
        }
    }
}

const myConta = contaBancaria()

myConta.sacar(2000)
console.log(myConta.verSaldo())
// console.log(myConta.depositar(500))
// console.log(myConta.sacar(1000))