const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/Home', require('./Routs/home-routs'))
app.use('/category', require('./Routs/category-routs'));

app.use('/Corses', require('./Routs/course-routs'))

app.set("view engine", "ejs");

app.use('/google', require('./YouTube/video-rout'))



app.use('/Users', require('./Routs/users-routs'))


app.use('/Foot', require('./Routs/foot-routs'))



// app.get('/users', isDevelopment ? cors() : non(), (req, res) => {
//     let myJson = (require('./Users.js')).myObj;
//     res.json(myJson)
// })

// app.get('/courses', isDevelopment ? cors() : non(), (req, res) => {
//     let myCard = (require('./Course.js')).categoriecard;
//     res.json(myCard)
// })



//=========================

let port = 1598
let host = "localhost"
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});