var friends = require("../data/friends");

module.exports = function(app){

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
  
    var totalDifference = 0;
    var bestMatch = { 
      name: "",
      photo: "",
      friendDifference: 1000
    };
    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;
    
    //Here we go through each item in one array and are parsing them from strings and storing them as integers into the another array 

    var b = userScores.map(function(Item){
      return parseInt(Item, 10);
    });
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    var sum = b.reduce((a,b) => a + b, 0); //Adding up the sum of all the userScores

    for (var i = 0; i < friends.length; i++){
     console.log(friends[i].name);
      totalDifference = 0;  
      
      var bfriendScore = friends[i].scores.reduce((a,b) => a + b, 0); //Here we are ading up the sum of all the friends scores
      console.log("Total friend score " + bfriendScore);
      totalDifference += Math.abs(sum - bfriendScore); // Here is is getting the difference between the user and all the friends scores
      console.log("------------------++++++++++++++++++++")

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
      console.log(totalDifference = "Total Difference");
    };
    console.log(bestMatch);
    friends.push(userData);
    console.log("New User Added");
    console.log(userData);
    res.json(bestMatch);
  });
};


