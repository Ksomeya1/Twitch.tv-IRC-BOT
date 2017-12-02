//twitch chat bot 
// to pull the tmi.js module you must create a variable and let it require tmi.js
var tmi = require('tmi.js');

var options = {

	options: {
		debug: true
	},
	connection: {
		cluster:"aws",
		reconnect:true
	},
	identity: {
		username: "TotesB0T",
		password: "oauth:fshrwjqm6lf5iqfxxepcd0cximuv32"
	},
	channels: ["totessomedotes"]

};

//connecting to IRC
// this is from tmi.js document and we are PASSING options into our client
var client = new tmi.client(options);
client.connect();

//event actions

client.on('chat', function(channel, user, message, self) {
	//console.log("Address: " + address + " Port: " + port);
	// below is to type stuff in chat using action command from tmi documentation

	if(message === "!commands") {
		client.action("Totessomedotes", "Here are my commands: !twitter !github !facebook !website more soon..beep boop MrDestructoid ")
		;
	}	
});	
	client.on('connected', function(address, port) {
		client.action("Totessomedotes", "TotesB0t reporting for duty type !commands to check out my commands beep boop MrDestructoid");
	
});

