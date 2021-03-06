const { MessageEmbed } = require("discord.js");
const config = require("../../config.json")
module.exports = {
  config: {
    name: "help",
    description: "Get a list of bot commands.",
    usage: "help",
    category: "Main",
    accessableby: "Everyone",
    aliases: [], // To add custom aliases just type ["alias1", "alias2"].
  },
  run: async (client, message, args) => {

    if (message.guild) {
      message.channel.send('Check your DMs!');
      message.delete();
      let embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setColor(030101)
        .addField(`đ ${config["Bot_Info"].prefix}start [channel] [duration] [winners] [prize]`, 'The channel has to be visible to the giveaway bot.\nDuration is stated in a number and a time variable.\nWinners is stated in a positive number.\nPrize can be anything except blank.')
        .addField('đĽ Example:', `â¨ď¸ ${config["Bot_Info"].prefix}start #general 10m 1 $9.99 Nitro\nâĄď¸ Creates a \`10 minute\` long giveaway with \`1\` winner and\n\`$9.99 Nitro\` as a prize in \`#general\`.`)
        .addField(`â ${config["Bot_Info"].prefix}end [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
        .addField('đĽ Example:', `â¨ď¸ ${config["Bot_Info"].prefix}end 892678258946659587\nâĄď¸ Ends the giveaway with the message-ID \`892678258946659587\`.`)
        .addField(`đ ${config["Bot_Info"].prefix}reroll [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
        .addField('đĽ Example:', `â¨ď¸ ${config["Bot_Info"].prefix}reroll 892678258946659587\nâĄď¸ Selects new winners for the giveaway with the message-ID \`892678258946659587\`.`)
        .setFooter('Made with đ and discord.js', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
      message.author.send(embed);
    }
    if (!message.guild) {
      let embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setTitle('Help')
        .setURL('https://replit.com/@Frazix12/discord-giveaway-bot#index.js')
        .setColor('7289da')
        .setDescription(`You want to create a giveaway bot yourself?\n[Check out our Github page!](https://replit.com/@Frazix12/discord-giveaway-bot#index.js)`)
        .addField(`đ ${config["Bot_Info"].prefix}start [channel] [duration] [winners] [prize]`, 'The channel has to be visible to the giveaway bot.\nDuration is stated in a number and a time variable.\nWinners is stated in a positive number.\nPrize can be anything except blank.')
        .addField('đĽ Example:', `â¨ď¸ ${config["Bot_Info"].prefix}start #general 10m 1 $9.99 Nitro\nâĄď¸ Creates a \`10 minute\` long giveaway with \`1\` winner and\n\`$9.99 Nitro\` as a prize in \`#general\`.`)
        .addField(`â ${config["Bot_Info"].prefix}end [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
        .addField('đĽ Example:', `â¨ď¸ ${config["Bot_Info"].prefix}end 892678258946659587\nâĄď¸ Ends the giveaway with the message-ID \`892678258946659587\`.`)
        .addField(`đ ${config["Bot_Info"].prefix}reroll [message-id]`, 'Message-ID has to be the **ID** of the giveaway message.\n**Not the link!**')
        .addField('đĽ Example:', `â¨ď¸ ${config["Bot_Info"].prefix}reroll 892678258946659587\nâĄď¸ Selects new winners for the giveaway with the message-ID \`892678258946659587\`.`)
        .setFooter('Made with đ and discord.js', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
      message.author.send(embed);
    }
  },
};
