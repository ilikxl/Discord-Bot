const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    let help = new Discord.RichEmbed()
        .setTitle("commands:")
        .setColor(client.config.secondaryColor)
        .addField("!mute", "Spieler muten")
        .addField("!kick", "Spieler kicken")
        .addField("!ban", "Spieler bannen")
        .addField("!report", "Spieler reporten")
        .addField("!information", "Informationen")
        .addField("!bonus", "^")
    message.channel.send(help);
};

module.exports.data = {
    name: "help"
}