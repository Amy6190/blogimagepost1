const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Mongodb connected");
}).catch((er)=>{
    console.log(er,'er');
})