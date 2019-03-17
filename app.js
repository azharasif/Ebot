const  express =  require("express");
const app = express() ;

const body_parser = require('body-parser');


const port = process.env.port || 4000;

//server listing on port 3000
app.listen(port, () => {

    console.log(`server listing on port ${port}`);

});


app.set('view engine', 'ejs');
app.use('/css',express.static('./public/css/'));
app.use('/images'  , express.static('./public/images/'));



app.use(body_parser.urlencoded({
    extended: false
}));

app.use(require('./Routes/Routes'));