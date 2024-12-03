//create a web server
const express = require('express');
const app = express();
//create a port
const port = 3000;

//create a get request
app.get('/comments', (req, res) => {
    res.send('This is a get request');
});

//create a post request
app.post('/comments', (req, res) => {
    res.send('This is a post request');
});

//create a put request
app.put('/comments', (req, res) => {
    res.send('This is a put request');
});

//create a delete request
app.delete('/comments', (req, res) => {
    res.send('This is a delete request');
});

//listen to the port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

//run the server using the command node comments.js
//open the browser and type http://localhost:3000/comments to see the output
//output: This is a get request

//open the postman and type the url http://localhost:3000/comments and change the request type to post
//output: This is a post request

//open the postman and type the url http://localhost:3000/comments and change the request type to put
//output: This is a put request

//open the postman and type the url http://localhost:3000/comments and change the request type to delete
//output: This is a delete request
