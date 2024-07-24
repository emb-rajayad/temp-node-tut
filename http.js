// localhost:5000 run in browser after run command
const http = require('http')

const server = http.createServer( (req, res) => {
	//console.log(req)
	if(req.url === '/') {
		res.end('Welcome This is home page')
        return
	}

	if(req.url === '/about') {
		res.end('Welcome This is about page')
        return
	}
	

	res.end(`
		<h1>Oops!</h1>
		<p>We can't find this web page</p>
		<a href="/">back home</a>
		`)
        return 
})

server.listen(5000)

