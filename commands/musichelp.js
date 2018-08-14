const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let mhelpEmbed = new Discord.RichEmbed()
    .setTitle(":musical_note: Music")
    .setColor("#ff0000")
    .addField(".play", "plays music(you need to be in a voicechannel for that)")
    .addField(".skip","this will skip music next in the queue")
    .addField(".pause", "pauses the current music playing")
    .addField(".resume", "resumes the music from pause state")
    .addField(".queue", "shows the queuelist")
    .addField(".stop", "stops the music from playing");


    return message.author.send(mhelpEmbed);













}


module.exports.help = {
    name:"music"
  }