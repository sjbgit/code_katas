

var sha512 = require('sha512'),
    uuid = require('uuid');


var signedCookieSecret = 'a1c54afc-79f4-4b03-a309-41a3adf25bac'; //from constants?
var participantGuid = uuid.v4();

var hash = sha512(participantGuid + signedCookieSecret);
var base64Encoded = hash.toString('base64');


module.exports = {
    participantGuid: participantGuid,
    participantGuidVerification: base64Encoded
};




console.log(hash);



    console.log(uuid.v4());//generate GUID

    console.log(base64Encoded);




var f = function() {

    return {
        test: 'one',
        test2: 'two'
    }

};


console.log(f());