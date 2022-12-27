#!/usr/bin/env node
const program = require('commander')
// const { select, input, execSync } = require('../src/hook')
const { commitMessage } = require('../src/action')
const pkg = require('../package.json')

program.version(pkg.version)


program
	.name('igit')
	.option('-c, --commit', 'Add Commit Message')
	.option('-p, --push', 'Push modification to Repositories')
	.option('-b, --branch', 'Push Change To Repositories')
	.action((action) => commitMessage(action))

program.parse()
