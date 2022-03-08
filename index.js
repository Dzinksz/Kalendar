// Requiring module
const express = require('express');
 
// Creating express object
const app = express();

app.use(express.static('public'))
 
// Handling GET request
app.get('/', (req, res) => {
    res.sendFile(__dirname +"/index.html")
});
 
// Port Number
const PORT = process.env.PORT ||3200;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
  