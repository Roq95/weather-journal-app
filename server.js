// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');
const bodyParser=require('body-parser');


// Start up an instance of app
const app=express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
const { listeners } = require('process');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=8888;
const server= app.listen(port,listenING);
function listenING(){
    console.log('SERVER RUNNING');
    console.log(`RUNNING LOCALHOST:${port}`);

}



app.post('/addWeather', (req,res)=>{
    const{newDate,temp,feelings}=req.body
    projectData.data=newDate
    projectData.temp=temp
    projectData.feelings=feelings
    res.end();

});

app.get('/getWeather',(req,res)=>{
    
    res.send(projectData);
})
