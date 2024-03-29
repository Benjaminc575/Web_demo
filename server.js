const mongo = require('./mongo');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./route/pages');
const path = require('path');
const app = express();
//const uri = process.env.MONGODB_URI;
let port = process.env.PORT;

if (port == null || port == ""){
    port = 3000;
}

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', route);

mongoose.connect(mongo, {useNewURLParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(port, ()=> {
        console.log(`Listening on port ${port}`)
    })
})


