const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    if(args == "") return message.reply("Please mention an user");
    const reportedUser =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    const reason = args.join(" ").slice(22);
    if (!reason) return message.reply(`Please give a reason.`);

    if(!reportedUser){
        message.reply(`could not find user "${args[0]}."`);
        return;
    };
    if(reportedUser.id === message.author.id){
        message.reply(`You can't report your self.`);
        return;
    }
    if(reportedUser.id === client.user.id){
        message.reply(`You can't report the bot.`);
        return;
    }
    let report = new Discord.RichEmbed()
        .setDescription("Report:")
        .setColor(client.config.color)
        .addField("Reported User:", `${reportedUser} (${reportedUser.id})`)
        .addField("Reported By:", `${message.author} (${message.author.id})`)
        .addField("Channel:", `${message.channel}`)
        .addField("Reason:", reason)
    client.botChannel.send(report);
}
module.exports.data = {
    name:"report"
}