
function getData(){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            resolve('vini')
        }, 1000)
    })
}

function onSuccess(data){
    console.log(`Success ${data}`)
}

function onError(error){
    console.log(`Error ${error}`)
}

// const promise = getData()
// promise.then(
//     function(data){
//     console.log(data)
//     }
// )

getData().then(onSuccess, onError)
