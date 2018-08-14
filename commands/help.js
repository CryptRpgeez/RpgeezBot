const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpEmbed = new Discord.RichEmbed()
    .setTitle("Commands")
    .setColor("#ff0000")
    .addField(".kick", "kicks a member from the server")
    .addField(".report", "reports a member in the server,add a reason after name for submission")
    .addField(".ban","bans a member from the server permanently")
    .addField(".mute","mutes a member temporarily add the amount of seconds/minutes/hours or days after name for command to execute")
    .addField(".serverinfo","Provides Information About the Server")
    .addField(".botinfo","Provides Information About the Bot")
    .addField(".clear","clears messages from specific channel of the server add an amount after command to delete that amount of messages")
    .addField(".gif","send GIFs in chat")
    .addField(".userinfo","shows info about a user in the server")
    .addField(".addrole", "puts a member in a specified role")
    .addField(".removerole", "removes a specified role from member")
    .addField(".urban", "get meanings of words you like from urban dictonary")
    .addField(".rules","see the rules for the server in embedpages form")
    .addField(".github", "Check out our github page");



    return message.author.send(helpEmbed);



 





}


module.exports.help = {
    name:"help"
  }