const { spawnSync } = require('child_process')

console.log('Installing Dependencies')
spawnSync('yarn', { stdio: 'inherit' })
