'use strict'

var init = function () {
console.log("configurations have been made");  
	if(process.env.NODE_ENV === 'production') {
		
		return {
			db: {
			
			username: "Tello",
        password: "13dochesterS",
        host: "ds021010.mlab.com",
        port: "21010",
        name: "loginapp"

			},
			sessionSecret: process.env.sessionSecret,
			
			
			
		}
	}
	else {
		return require('./config.json');
	}
	
}

module.exports = init();
