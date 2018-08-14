const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("Ping!").then(m => m.edit(` Latency is ${m.createdTimestamp - message.createdTimestamp}ms #Rpgeez`) );












}


module.exports.help = {
    name:"ping"
  }
  
    

  
