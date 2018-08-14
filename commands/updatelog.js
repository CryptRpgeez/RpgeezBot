const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let updateEmbed = new Discord.RichEmbed()
    .setTitle("Update 1.5")
    .setThumbnail("https://cdn.discordapp.com/icons/313888945484070918/0cfe721148f44be9a929319dd9aac171.webp")
    .setDescription("Whats New:\n Added urban dictionary \n Added embedpages support \n\n Bug Fixes: \n Fixed Commands Not Responding.")
    .setColor("#ff0000")



    return message.channel.send(updateEmbed);








}


module.exports.help = {
    name:"updatelog"
  }
  