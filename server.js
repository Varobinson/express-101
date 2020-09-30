const http = require('http');
const express = require('express')
const hostname = '127.0.0.1';
const port = 3000;
const app = express()

const server = http.createServer(app)

app.get('/', (req,res)=>{
    res.send('Hello World')
})
app.get('/friends', (req,res)=>{
    res.send(
  `  <ul>
        <li>Jake</li>
        <li>Paul</li>
        <li>Ryan</li>
    </ul>`
    )
})

app.get('*',(req,res)=>{
    res.send('not the homepage')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

});

// const server = http.createServer((req, res) => {
//     if (req.url ==='/'){
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World')
// }else{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('not home page')
// }}
// );
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });