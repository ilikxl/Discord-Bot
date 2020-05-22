const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    message.channel.send(`Hier ein paar Infos für ${message.author.username}`);
    
    let help = new Discord.RichEmbed()
        .setDescription("Informationen")
        .setColor(client.config.secondaryColor)
        .addField("bot version", "v.1.0")
        .addField("creator", "Taris")
        .addField("bot name", "test-bot")
        .addField("Hilfe", "!help")
    message.channel.send(help);
};

module.exports.data = {
    name: "info"
}