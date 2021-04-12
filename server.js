const express = require('express');
const mongojs = require('mongojs');

const db = mongojs('blogdb',['users']);
//const db = mongojs('test',['test']);


const app = express()

//za citanje iz body-a req
app.use(express.json())

app.get('/data', (req, res)=> {
    res.send('works fine !!!')
})

app.post('/register', (req, res)=> {
    //save new useer
    db.users.find({email: req.body.email, pass: req.body.pass}, (err, docs)=> {
        console.log(docs.length);
        if(docs.length == 1){
            console.log('usao u if');
            res.send(false)
        }else{
            db.users.insert({name: req.body.name, pass: req.body.pass, email: req.body.email, lastname: req.body.lastname,
                admin: 0}, (err, docx)=> {
                    res.send(true)
                })
        }
        
    })       
})

app.post('/login', (req, res)=> {
    
    console.log(req.body);
    db.users.find({email: req.body.email, pass: req.body.pass}, (err, docs)=> {
        console.log(docs.length);
        if(docs.length == 1){
            console.log('usao u if');
            res.send({
                name: docs[0].name,
                token: docs[0]._id,
                // err: null
            })
        }else{
            res.send({
                err: 'neispravno'
            })
        }
    })

   
    
    
})

app.listen(9000, ()=> {
    console.log('server runing to port 9000');
})