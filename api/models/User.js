/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
       names: {
       	type :"string",
       	required: true
          },

       genders : {
       	type : "string",
       	required: true
       },   

       professions: {
       	type :"string",
       	required: true
       },

       ageGroups: {
       	 type : "string",
       	 required: true
       }

  },

addingData: function (data, callback) {
            sails.log.debug(data);
            User.create(data).exec(function (err, Userdata) {
  
                  if (!err) {        
                      return callback(null, Userdata)             
                  } else {
                      return callback(err);
                  }
            });
      },


  pickup: function(data, cb){
    User.find().limit(1).exec(function(err, allreadyMatchedUsers){
      if(err){
        cb(err,null);
      }else{
        allreadyMatchedUsers = _.map(allreadyMatchedUsers, function(user){
          return user.id;
        });
         

        User.find({id: {'!': allreadyMatchedUsers}, genders: 'female', ageGroups: '20-30' , professions : 'doctor'}).limit(10).exec(function(err, matches){
            cb(null, matches);
        });
          
      }

        
    });
  }


 

     

      
};


