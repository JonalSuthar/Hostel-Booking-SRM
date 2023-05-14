const express =  require('express');
const path    =  require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const port = 3000;

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

//own module
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: false
    })
  );

// app.get('/loginAccount',function(req,res){
//   res.render('user/loginAccount')
// });

// app.get('/booking',function(req,res){
//   res.render('user/booking')
// })

// app.get('/payment',function(req,res){
//   res.render('user/payment')
// })

// app.get('views/user/hostel',function(req,res){
//   res.render('/hostel')
// })

// app.post('/login',function(req,res){
//   res.render('user/hostel')
// })
// app.get('views/user/booking',function(req,res){
//   res.render('/booking')
// })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(userRouter);
app.use("/admin" ,adminRouter);
app.listen(process.env.PORT || port, () => console.log(`Server is Running on port ${port}`));