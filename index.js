const express = require('express')
const app= express();
const mongoose= require('mongoose')
const shortUrl = require("./shortUrl")

mongoose.connect(
    "mongodb+srv://write your name and password B@cluster0.swixu.mongodb.net/urlshortener?retryWrites=true&w=majority",
    () => {
      console.log("connected");
    },
    (e) => console.error(e)
  );

app.get('/shortUrls', async (res,req)=>{
  await shortUrl.create({
    full: req.body   
  })
})



app.listen(process.env.port || 8000);
