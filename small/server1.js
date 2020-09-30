const http = require('http'); // core http module
const express = require('express'); // 3rd party express module
const list = require('./list')
const hostname = '127.0.0.1'; // localhost (our computer)
const port = 3000; // port to run server on

const app = express(); // creating express app

const server = http.createServer(app); // use app to handle server requests

app.get('/greet',(req, res)=>{   
    let people = ''
    for (let i = 0; i<list.length;i++){
        const person = list[i]
        
        people += `<li><a href = '/greet/${person.name}'>${person.name}</a></li>`
    }
    res.send(
        `<ul>
        ${people}
        </ul>`
    )
})

app.get('/greet/:name', (req, res)=>{
    const { name } = req.params
    res.send(`Hey, ${name}`)
})


server.listen(port, hostname, () => {
    // once server is listening, log to the console to say so
    console.log(`Server running at http://${hostname}:${port}/`);
  });