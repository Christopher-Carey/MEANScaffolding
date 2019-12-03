// npm init -y
// npm install express ejs mongoose
// npm i express-flash

const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// ----------------------
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
 })
const User = mongoose.model('User', UserSchema);
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
// ----------------------



app.get('/', (request, response) => {
   response.send("Hello Express");
});
app.listen(8000, () => console.log("listening on port 8000"));
// ----------------------







// .catch(err => {
//   console.log("We have an error!", err);
//   // adjust the code below as needed to create a flash message with the tag and content you would like
//   for (var key in err.errors) {
//       req.flash('registration', err.errors[key].message);
//   }
//   res.redirect('/');
// });