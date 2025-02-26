
function clickHandler(size){
    return function(){
        document.body.style.fontSize = `${size}`
    }
}

clickHandler(12)
