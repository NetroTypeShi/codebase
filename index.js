const express =require('express');

const app = express();
app.use(express.static('public'));

app.get('/testing', (req, res)=> {                                  
    res.send(`Lamaste desde ${req.headers.host}`);
})
//console.log(app)

app.listen(3000, ()=> {
    console.log('Server runing on 3000');
})
