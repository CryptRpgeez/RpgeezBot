const Discord = require("discord.js");
const got = require(`got`);
const api ='lk6eA0thh2lz3qJbWvuwqfkRvGbZzH5l';

module.exports.run = async (bot, message, args) => {
    if (args.length < 1) return message.channel.send(`Text is Required`, {code: "py"})
    const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(""))}`, {json: true})
    if(!res || !res.body || !res.body.data) return message.channel.send("@Failed to find a GIF that matched your query!", {code: "py"})
    

    const embed = new Discord.RichEmbed()
    .setImage(res.body.data.image_url)
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor("#ff0000")

    message.channel.send({embed: embed});













}


module.exports.help = {
    name:"gif"
  }
  




