const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page!')
        return
    }
    if (req.url === '/about') {
        res.end('Here is our short history...')
        return
    }
    res.end(`
        <h1>OOPS!!</h1>
        <p>We Can't seem to find that page...</p>
        <a href='/'>back home</a>
        `)
})

server.listen(5000)