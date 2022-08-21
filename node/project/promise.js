const promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('promise rejected')
        }, 5000)
    })
}

const asyncfunc = async () => {
    try{
        let msg = await promise()
        console.log(msg)
    }
    catch(error) {
        console.log(error)
    }
}

console.log('start')
asyncfunc()
console.log('end')

// promise().then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log('error '+ error)
// })