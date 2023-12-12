import {createServer} from "http"
const PORT = 5000
createServer((request, response) => {
    response.writeHead(200)
    response.end("hey there")

}).listen(PORT, () => console.log('running server'))

;
[
"uncaughtException",
'unhandledRejection'
].forEach(event => process.on(event, (err) => {
    console.error(`something bad happened event: ${event}, msg: ${err.stack || err}`)
}))