'use strict'

var init = function () {
console.log("configurations have been made");  
	if(process.env.NODE_ENV === 'production') {
		
		return {
			db: {
			
			
			},
			sessionSecret: 'EJLWClaghRoNyD1NReN8H-NYmjMZkePD',
			
			
			
		}
	}
	else {
		return require('./config.json');
	}
	
}

module.exports = init();
