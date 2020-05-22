const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
   
    
    let anno = new Discord.RichEmbed()
        .setDescription("Ankündigungen")
        .setColor(client.config.secondaryColor)
        .addField("Zeiten", "Immer 18:00")
        .addField("Absagung", "Wenn man nicht kann dann soll man das RECHTZEITIG sagen")
        .addField("Sonstiges", "Für Vorschläge für den Bot einfach schreiben")
        .addField("Hilfe", "!help")
    message.channel.send(anno);
};

module.exports.data = {
    name: "anno"
}