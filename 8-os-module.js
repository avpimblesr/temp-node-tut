const os = require('os')

console.clear()

//  info about current user
const user = os.userInfo()
console.log(user)
console.log(user.username)

//  method returns the system uptime is seconds
console.log(`The System Uptime is ${os.uptime()} seconds.`)

//  current OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)