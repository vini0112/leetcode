
function millis(milli){
    return new Promise((resolver) =>{
        setTimeout(() =>{
            console.log('worked')
            resolver(milli)
        }, milli)
    })
}
millis(1000)
