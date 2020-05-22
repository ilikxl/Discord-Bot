const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    
    let bonus = new Discord.RichEmbed()
        .setTitle("Bonus lol")
        .setThumbnail("https://i.redd.it/d8eugydbyik01.jpg")
        .setColor("#8DFF04")
        .addField("Rosen sind Rot", "Ich ess gern Brot")
        .addField("Anisa sagt", "Afrem ist nicht Zuhause")
        .addField("Sag einfach wenn du mich siehst", "Mashallah das hübsche")
        .setImage("https://miro.medium.com/max/1400/1*QK3BCQ178WBWUcKSnEw_xA.jpeg")
        .setFooter("P.s. Die Erde ist flach lol")
        .setTimestamp()
    message.channel.send(bonus);
}
module.exports.data = {
        name: "bonus"
}