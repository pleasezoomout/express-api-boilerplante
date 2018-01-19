const mailer = require("nodemailer");

/**
 * Email sender. More info at https://nodemailer.com/about/
 * @param  {string} text    	Text to be sent 
 * @param  {string} emails   Email of the users separate by comma "email@aol.com, example@gmail.com" 
 * @param  {string} subject 	subject of the email
 * @return {promise}        	promise with the email result
 */
module.exports = function (text, emails, subject) { 

    return new Promise(function(resolve, reject) { 

        let smtpTransport = mailer.createTransport({
            host: 'smtp.aol.com',
            port: 587,
            secure:false,
            requireTLS:true,
            debug:true,
            auth: {
                user: "email",
                pass: "password"
            }
        });

        let mail = {
            from: "any <your.mail@aol.com>",
            to: emails,
            subject: subject,
            text: text
        }

        smtpTransport.sendMail(mail, function(error, response){

            if(error)
               reject(error);
            else
                resolve(response) 

            smtpTransport.close();

        });
    })
}