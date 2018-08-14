const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

 

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("User Cannot Be Muted!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#ff0000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify the time Period");

  await(tomute.addRole(muterole.id));
  message.channel.send(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}:mute:`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted:sound:`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mute"
}
