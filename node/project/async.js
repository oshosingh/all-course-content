const request = require('request')
const url = 'https://jsonplaceholder.typicode.com/posts'

const data = (index) => {
    request({ url: url, json: true }, (error, response) => {
        console.log(index)
        if (error) {
            callback(error)
        }
        else if (index < 0) {
            callback('incorrect index')
        }
        else {
            console.log(response.body[index])
        }
    })
}

const readData = (index, callback) => {
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(error)
        }
        else if (index < 0) {
            callback('incorrect index')
        }
        else {
            callback(undefined, JSON.stringify(response.body[index]))
        }
    })
}

const invoke = (index) => {
    readData(index, (error, response) => {
        if (error) console.log('error ' + error)
        else {
            let val = JSON.parse(response)
            console.log(val)
        }
    }
    )
}

console.log('enter index')
index = process.argv[2]
console.log('index is ' + index)
invoke(index)
console.log('read posts')
