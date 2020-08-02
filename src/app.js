var express = require('express');
var path = require('path');
var app = express();

//loads the static file
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/template/index.html'));
});


app.get('/search_name', function(req, res) {
    //Creating an array of names
    var suggestedNames = [
        "Akash",  
        "Anthony",  
        "Bob", 
        "Pinka", 
        "Elle",  
        "Frank",  
        "Maria",  
        "Shiwangi",  
        "Happy",  
        "catherine",  
        "Jay",  
        "Megha",  
        "Sonali",  
        "Rajeev",  
        "Ranveer",  
        "Ashwini",  
        "Tansel",  
        "Alina",  
        "Akshay",
        "Shri",
        "Stephen"
    ];
    text = req.query["term"].toLowerCase();
    // Logic to filter based on input
    var suggestions = suggestedNames.filter(n => n.toLowerCase().startsWith(text))
    
    if (suggestions) {
        var nameData = JSON.stringify(suggestions);
        res.send(nameData, {
            'Content-Type': 'application/json'
           }, 200);
    } else {
          res.send(JSON.stringify(err), {
             'Content-Type': 'application/json'
          }, 404);
    }
    
 });
 
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
