const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You Do Not Have The Permission,Contact Administator");
  if(!args[0]) return message.channel.send("Not Possible");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages :wastebasket:.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
