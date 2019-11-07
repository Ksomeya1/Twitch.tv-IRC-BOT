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
		password: "oauth:6qow48biqs5ci4h9j9gu0z6dxvtcy1"
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
		client.action("Totessomedotes", "Here are my commands: !fightme !twitter !github !facebook !website !creator more soon..beep boop MrDestructoid ")
		;
	} else if(message === "!twitter") {
		client.action("Totessomedotes", "My Twitter is.. don't got one LUL")
	} else if(message === "!creator") {
		client.action("Totessomedotes", "My creator is TotesSomeDOTES, check out his github or facebook for more PogChamp")
	} else if(message === "!github") {
		client.action("Totessomedotes", "github.com/ksomeya1 MrDestructoid")		
	} else if(message === "!website") {
		client.action("Totessomedotes", "DataConquer it is still under construction MrDestructoid")
	} else if(message === "!facebook") {
		client.action("Totessomedotes", "My facebook is PogChamp")
	} else if(message === "!fightme") {
		client.action("Totessomedotes", user['display-name'] + " you tryna fight me? cmonBruh I'm just a program pls no BibleThump")
	}	
});	
	client.on('connected', function(address, port) {
		client.action("Totessomedotes", "[TotesB0T] reporting for duty type !commands to see what I can do.. beep boop MrDestructoid");
	
});

