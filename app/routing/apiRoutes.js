var friends = require("../data/friends");

module.exports = function(app){

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var currentFriend = [];
    for (var i = 0; i < friends.length; i++){
      var difference = 0;
      for (var j = 0; j < friends.scores.length; j++){
       difference += Math.abs(friends.scores[j] - this.body.req.scores);
      }
     var num = 50;
     if (difference < num) {
       
     }
    };
  });
};

// req.body,
