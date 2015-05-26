/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    
  add : function (req, res) {
        var names = ['parag','kuldeep','neha','harsh','ankita','priyanka','mikhail','arun','rose','nikita' ];
        var genders = ['male', 'female'];
        var professions = ['doctor','engineer','pilot','sailor','painter','sportsman','teacher','joker','watchman','principal'];
        var ageGroups = ['20-30', '30-40', '40-50','50-70'];
       
        var users = [];
       
       for (var i = 0; i < 5; i++ ) {
            var data = {};
            data.names = names[Math.floor(Math.random() * names.length)]; 
            data.genders = genders[Math.floor(Math.random() * genders.length)];
            data.professions = professions[Math.floor(Math.random() * professions.length)];
            data.ageGroups = ageGroups[Math.floor(Math.random() * ageGroups.length)];
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
            if (err) {
                res.forbidden();
            } else {
                res.json(data);
                
            }
        });
    
       
    }      
    
  

    
};

