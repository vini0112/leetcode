
let cont = 11

let interval = setInterval(() =>{
    cont--
    console.log(cont)

    if(cont == 0){
        clearInterval(interval)
        console.log('stopped')
    }
}, 1000)

// leetcode down here

// var cancellable = function(fn, args, t) {
//     fn(...args)
//     let interval = setInterval(() =>{
//         fn(...args)
//     }, t)

//     const cancelFn = () => clearInterval(interval)
//     return cancelFn
// };

