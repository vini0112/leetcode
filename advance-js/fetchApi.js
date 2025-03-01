
// SIMPLE REQUEST 
async function getData(){
    // this will return a Response -> with this prototype5 u can see some infomations like the url that you're pointing
    const response = await fetch(url) 

    // transforming the response into a json and then we can see the data
    const data = await response.json()
}



//HANDLING ERRORS
async function getData(){
    try{
        const response = await fetch(url) 
        const data = await response.json()
        if(response.ok){
            console.log('success', data)
        }else{
            console.log('server error', response.error.message)
        }

    }catch(error){
        console.log('error', error)
    }
    
}


