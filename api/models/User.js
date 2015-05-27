/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
       res_match: {
         type : "string",
         required : true
       },
       state: {
        type : "string",
        required : true
       },
       name: {
       	type :"string",
       	required: true
          },

       gender : {
       	type : "string",
       	required: true
       },   

       profession: {
       	type :"string",
       	required: true
       },

       ageGroup: {
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
    User.find().limit(5).exec(function(err, allreadyMatchedUsers){
      if(err){
        cb(err,null);
      }else{
        allreadyMatchedUsers = _.map(allreadyMatchedUsers, function(user){
          return user.id;
        });
         

        User.find({id: {'!': allreadyMatchedUsers}, res_match:'shortlisted', state:'match', genders: 'male', ageGroups: '20-30' , professions : 'doctor'}).limit(2).exec(function(err, matches){
            sails.log.debug(matches);
            cb(null, matches);

        });
          
      }

        
    });
  }


 

     

      
};


