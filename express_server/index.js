const express = require('express');
const app = express();
const port = 5000;
app.get('/',(req,res)=>{
    res.send("hello gaurav iam so happy that you launched a server successfully");
})
app.listen(port,()=>{
    console.log(`app is running in port ${port}`);

})