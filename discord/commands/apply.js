const Discord = require('discord.js');
const config = require('../../config.json')

module.exports.run = async (client, message, args) => {
  var embed = new Discord.RichEmbed()
    .setTitle('')
    .setURL(`https://www.craftingforchrist.net/apply`)
    .setDescription(`You can apply to connect to our servers by going to our website here: https://www.craftingforchrist.net/apply`)
    .setColor('#ffa366')
  message.channel.send(embed);
};

module.exports.help = {
  name: 'apply'
};
