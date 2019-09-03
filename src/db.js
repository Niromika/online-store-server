const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/online-store', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection erroe:'));
db.once('open',()=>{
    console.log('connected to DB');
});