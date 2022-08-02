const express = require('express');
const router = express.Router();
const Contact = require('./models/contact');

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/education', (req, res) => {
    res.render('education')
})

router.get('/aboutme', (req, res) => {
    res.render('aboutme')
})

router.get('/projects', (req, res) => {
    res.render('projects')
})

router.post('/submitContact',(req, res) => {
    const contact = new Contact ({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        reason: req.body.reason,
        comment: req.body.comment,
    });

    Contact.collection.insertOne(contact)
    .then(result => {
        res.render(contact)
    })
    .catch(err => console.log(err));
})



module.exports = router;

