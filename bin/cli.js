#!/usr/bin/env node
const { select, input, execSync } = require('../src/hook')
// const data = execSync('git status')
// const data = execSync('git status')

// console.log(data.toString())

console.log([
	execSync('git add .'),
	execSync(`git commit -m  "chore: test script"`),
].map(i => i.toString()))
// (async () => {
// 	const name = await input([{
// 		type: 'input',
// 		name: 'username',
// 		message: 'What is your username?'
// 	}])
// 	const color = await select({
// 		name: 'color',
// 		message: 'Pick a flavor',
// 		choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
// 	})

// 	console.log(name, color);

// 	// process.exit(0)
// })()