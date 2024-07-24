 const os = require('os')

 // info about current user

const user = os.userInfo()
console.log(user);

// system returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
}

console.log(currentOs)

const path = require('path')
console.log(path.sep)