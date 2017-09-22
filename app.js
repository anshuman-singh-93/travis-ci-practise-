const express=require('express');
const app= new express();
const port=process.env.PORT||3000;

app.get('/',(req,res)=>{
    "use strict";
    res.send('welcome')
})
app.listen(port,()=>{
    "use strict";
    console.log(`listening on ${port}`);
});
