const { spawnSync } = require('child_process')
const { platform } = require('os')

const YARN_CMD = platform() === 'win32' ? 'yarn.cmd' : 'yarn'

console.log('Installing Dependencies')
spawnSync(YARN_CMD, { stdio: 'inherit' })
