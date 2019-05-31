import fs from 'fs'

const content = fs.readFileSync('index.js', 'utf8')
const newContent = content.replace('export default', 'module.exports =')
fs.writeFileSync('index.cjs.js', newContent)
