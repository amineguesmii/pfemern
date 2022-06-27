const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require("cors")
const disease = require ('./routes/api/Maladies')


const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const db = require('./config/keys').mongoURI;

mongoose.set('useFindAndModify', false);
mongoose
  .connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));
app.use(passport.initialize());


app.use('/api/disease', disease);


app.listen(3100, () => console.log(`Server running on 3100`));
