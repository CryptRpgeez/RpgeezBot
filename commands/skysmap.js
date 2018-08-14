const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let skyembed = new Discord.RichEmbed()
    .setTitle("RPG VS INSURGENT ULTIMATE")
    .setThumbnail("https://media.discordapp.net/attachments/477476727485104151/478418718875975680/s.jpg")
    .addField("Creator", "SKYMAN_9001")
    .setDescription("A twist to a popular game mode, I've selected my favorite aspects of other maps to create this cool map. I have included multiple little easter eggs to make the game more interesting, including 4 Duke O'Death's, planes, and some other little secrets. Big thanks to FinalRpg, pingonewtnewt, CryptYT, and Karma-llama-C for working with me to come up with fun concepts. Please enjoy, and who knows, I may be in your lobby right now...")
    .addField("Location", "Pacific Bluffs")
    .addField("Rating", "49%")
    .addField("Players", "2-30")
    .addField("Teams", "2")
    .setImage("https://media.discordapp.net/attachments/477476727485104151/478417429358313483/2_0.jpg?width=400&height=224")
    .setFooter("http://rsg.ms/9b26565")
    .setColor("#8f42f4")
    


    message.channel.send(skyembed);









}


module.exports.help = {
    name:"skysmap"
  }