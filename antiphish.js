//Anti Phishing twitch extension for donations and chat using tmi.js and streamlab API
//Written by Kota Someya. Check out my GitHub/Ksomeya1

var tmi = require('tmi.js');
//using the tmi.js library
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
//authenticating the bot that will parse chat for phising link / streamlab donations.
//you can edit it to whoever to mod / parse / check links
//^^
//connecting to IRC
// this is from tmi.js document and we are PASSING options into our client
var client = new tmi.client(options);
client.connect();

var str = everything anyone says within chat. how //do i pass that into the string??? 
var r = /\.(net|com|exe|bat|org)/; // regex to test for links and exe 
//this regex is testing for any .d{3} given a text input field
//this r variable is identifying any phishy top level domain or executable files.
// for the var r = string do i have to set a logical rule to LISTEN to all the what chat is saying,
// and parse all the messages in the chat, but ONLY looking for .exe .bat etc? 

var matched = r.test(str);

console.log(matched); //change to highlight matched text  

// var array =[];
// var links = document.links;
// for(var i=0; i<links.length; i++){
// 	array.push(links[i].href);
// }



	//event actions LISTEN FOR CHAT LINKS HERE. 
	//Maybe add a command like !checklinks or !check or !parse 
	//need to listen to href links posted in the chat and push that into an array to CALL that link and apply regex / testing

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

client.on("message", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Handle different message types..
    switch(userstate["message-type"]) {
        case "action":
            // This is an action message..
            break;
        case "chat":
            // This is a chat message..
            break;
        case "whisper":
            // This is a whisper..
            break;
        default:
            // Something else ?
            break;
    }
});