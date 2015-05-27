/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    
  add : function (req, res) {
        var state = ['match','unmatch','block','null'];
        var res_match = ['shortlisted','notshortlisted','pending','block'];
        var name = ['parag','kuldeep','neha','harsh','ankita','priyanka','mikhail','arun','rose','nikita' ];
        var gender = ['male', 'female'];
        var profession = ['doctor','engineer','pilot','sailor','painter','sportsman','teacher','joker','watchman','principal'];
        var ageGroup = ['20-30', '30-40', '40-50','50-70'];
       
        var users = [];
       
       for (var i = 0; i < 1000; i++ ) {
            var data = {};
            data.state = state[Math.floor(Math.random() * state.length)];
            data.res_match = res_match[Math.floor(Math.random() * res_match.length)];
            data.name = name[Math.floor(Math.random() * name.length)]; 
            data.gender = gender[Math.floor(Math.random() * gender.length)];
            data.profession = profession[Math.floor(Math.random() * profession.length)];
            data.ageGroup = ageGroup[Math.floor(Math.random() * ageGroup.length)];
            users.push(data);
       }

       var j = 0;
       var cb = function(err, user){
        if(err){
          sails.log.error(err);
        }
        else{
          j++;
          User.addingData(users[j], cb);
        }
       }
       
       User.addingData(users[j], cb);
       res.json({msg: 'ok'});
    },  

 
  pickup : function (req,res) {
       User.pickup(req.body,function (err, data) {
         sails.log.debug(data);
            if (err) {
                res.forbidden();
            } else {
                res.json(data);
                
            }
        });
    
       
    }      
    
  

    
};

