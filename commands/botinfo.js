const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Rpgeez Bot")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField("Developer", "Crypt")
    .addField("Created On", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
