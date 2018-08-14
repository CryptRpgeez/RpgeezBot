const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You Do Not Have Permission,contact administrator");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That user can't be Banned!");

    let banEmbed = new Discord.RichEmbed()
    .settitle("adiós Siempre imbécil :middle_finger:")
    .setColor("#ff0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Reason", bReason);


    message.guild.member(bUser).ban(bReason);
    return message.channel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
