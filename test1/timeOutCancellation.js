var cancellable = function(fn, args, t) {

    const timer = setTimeout(() => fn(...args), t) // timer tem uma quantidade de tempo t para se executado
    const cancelFn = () => clearTimeout(timer) // se antes desse tempo t a funcao ja tiver acabado ent cancele a funcao! 
    return cancelFn // e retorne-a
};

