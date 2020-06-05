const express= require("express");
const bodyParser = require("body-parser");
const https=require("https");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

});
app.post("/",function(req,res){

    const url = "https://api.covid19india.org/state_district_wise.json"
    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {

            
            const coronaData=JSON.parse(data);
            console.log(coronaData);
             

        });  
});
});

    

app.listen(3000,function(req,res){
    console.log("server started at 3000");
});