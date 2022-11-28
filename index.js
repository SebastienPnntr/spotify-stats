const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/', require('./routes/router'));
app.use(express.static('public'));

app.use(function(req,res){
    res.status(404).render('404.ejs');
});

app.listen(port, () => {
    console.log(`En ligne sur le port ${port}`)
})