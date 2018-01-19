var bluebird = require('bluebird');
var mongoose = require('mongoose');

mongoose.Promise = bluebird

//mongoose.set('debug', true);

var userSchema = mongoose.Schema({
    	user: { 
    		type: String
    	},
        name: { 
            type: String
        },
        email: { 
            type: String
        }
});



var Promise = bluebird
Promise.promisifyAll(mongoose);

var user = module.exports = mongoose.model('user', userSchema);

// Add Quotes
module.exports.addUser = function(newUser){
    return newUser.saveAsync();
}

// Remove User
module.exports.removeUser = function(){
    return user.removeAsync();
}





