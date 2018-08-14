const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You Need Admin Privileges");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("adiós imbécil :middle_finger:")
    .setColor("#ff0000")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Reason", kReason);

    

    message.guild.member(kUser).kick(kReason);
    return message.channel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
