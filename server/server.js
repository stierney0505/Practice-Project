const express = require('express');
const cors = require('cors');
const path = require('path');
// const test2Routes = require('./router/test2.js').test2Routes; //Gets the additional routes from the test2.js file

const app = express();
const PORT = 3000; //Currently the port is hardcoded at 3000, can be changed if we decide to utilize a .env file
const corsOptions = {
    origin: 'http://localhost:5174',
}

app.use(cors(corsOptions));

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);

//Adam - test route
app.get('/api/data', (req, res) => {
    const data = {
        message: 'This is the data from the API route.',
        timestamp: Date.now(),
    }
    res.json(data);
});

//Sends the home page 
app.get('/', (req, res) => {
    res.send("API is working properly");
})

/*This provides all of files from the public directory from the server, i.e. http://localhost:port/<FILE.NAME> and these files should be files like css styles, 
js functions, and images. Anything that should be publically accessed by the frontend html */
app.use(express.static('public'));

//This is the 404 Route. THIS MUST REMAIN LAST IT CATCHES ALL OTHER GET REQUESTS 
app.get('*', function(req, res){
    res.status(404).send("404 error, page not found");
});