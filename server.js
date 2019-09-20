const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var surveyData = [];


app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "public/home.html"));
})

app.get("/survey", function(request, response){
    response.sendFile(path.join(__dirname, "public/survey.html"));
})

app.get("/api/survey", function(request, response){
    return response.json(surveyData);
})


app.post("/api/survey", function(request, response){
    var newSurvey = request.body;
    surveyData = [];

    surveyData.push(newSurvey);
    response.json(newSurvey);

})

app.listen(PORT, function(){
    console.log("Server on http://localhost:" + PORT);
})