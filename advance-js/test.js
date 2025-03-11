
const user = new Promise((resolver, reject) =>{
    setTimeout(() =>{
        resolver('worked')
        reject('kaka')
        
    })
})

// user
//     .then(data =>{
//         console.log(data)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
    // .finally(() =>{
    //     console.log('finalized')
    // })

// let api = 'https://api.publicapis.org/entries'
// const get = async () =>{
//     let res = await fetch(api)
//     let dados = res.json()
//     console.log(dados)
// }
// get()
