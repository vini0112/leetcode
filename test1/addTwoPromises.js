var addTwoPromises = async function(promise1, promise2) {
    
    const [valor1, valor2] = await Promise.all([promise1, promise2])
    return valor1 + valor2
};
// chamada todas as promises passadas !
