const Discord = require("discord.js");
const urban = require("relevant-urban")

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send("Add A Text Pls");

    let res = await urban(args.join(' ')).catch(e => {
        return message.channel.send("Cant find that word");
    });


    let urbanembed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle(res.word)
    .setURL(res.urbanURL)
    .setDescription(` Definition: \n ${res.definition} \n Example:\n ${res.example}`)
    .addField("Upvotes", `${res.thumbsUp}`)
    .addField("Downvotes", `${res.thumbsDown}`)
    .setThumbnail('https://media.discordapp.net/attachments/477476727485104151/478569008317202433/Urban-Dictionary-Logo.png?width=400&height=189')


    if(res.tags.length > 0 && res.tags.join(', ').length < 1024) {
        embed.addField('Tags', res.tags.join(', '), true)
    }








message.channel.send(urbanembed);



}


module.exports.help = {
    name:"urban"
  }
  