const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

     let user = message.author;
     let UserEmbed = new Discord.RichEmbed()
     .setAuthor(user.username)
     .setColor("#ff0000")
     .setThumbnail(user.displayAvatarURL)
     .addField('ID', user.id, true)
     .addField('Status', user.presence.status, true)

     message.channel.send(UserEmbed);







}


module.exports.help = {
    name:"userinfo"
  }