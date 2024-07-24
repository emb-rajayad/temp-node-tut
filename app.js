
// const amount = 12;

// if (amount < 10) {
// 	console.log('small number');
// } else {
// 	console.log('large number');
// }

// console.log(`hey it's my first node app!!!`);

//console.log(__dirname)

// setInterval(() => {
// 	console.log('hello world')
// }, 1000	)


// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
// 	 console.log(`hello there ${name}`)
// }

// sayHi('susan')
// sayHi(john)
// sayHi(peter)

// console.log(module)

// const names = require('./node-4')
// const data = require('./alternative-flower')
//  require('./7-mind-greened')

// console.log(data)
// console.log(names)


const _ = require('loadash');
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)