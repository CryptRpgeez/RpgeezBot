const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let pages = [' 1. No drama or disrespect towards any of the members.', '2. No pornographic or inappropriate content of any kind.', '3. Do not spam messages.', '4. These rules are subject to change and be added to at any time, absolutely do not argue or question staff.','5. Failure to follow any of the rules will result in a mute or possible ban'];
let page = 1;
let embed = new Discord.RichEmbed()
.setColor("#ff0000")
.setFooter(`Page ${page} of ${pages.length}`)
.setDescription(pages[pages-1])

message.channel.send(embed).then(msg => {
    msg.react('⏩').then( r => {
        msg.react('⏪')
        
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000});

        backwards.on('collect', r => {
            if(page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)

        })
        forwards.on('collect', r => {
            if(page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)

            
        })
    })
})












}


module.exports.help = {
    name:"rules"
  }
  