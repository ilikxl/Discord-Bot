const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    if (message.author.id === client.config.owner || message.member.hasPermission("MANAGE_MESSAGES") || client.config.trust.includes(message.author.id)){
        if (args == ""){
            message.reply(`Please mention an user.`);
            return;
        };
        let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kickedUser){
            message.reply(`could not find user "${args[0]}".`);return
        };
        if (kickedUser.id === client.config.owner || kickedUser.hasPermission("MANAGE_MESSAGES") || kickedUser.id === client.user.id){
            message.reply(`You can't kick this user.`);
            return;
        };
        let reason = args.join(" ").slice(22);
        if (reason === ""){
            message.reply(`Please give a reason.`);
            return;
        };
        let kick = new Discord.RichEmbed()
        .setDescription("Kick:")
        .setColor(client.config.adminColor)
        .addField("Kicked User:", `${kickedUser} (${kickedUser.id})`)
        .addField("Kicked By:", `${message.author} (${message.author.id})`)
        .addField("Time:", `${message.createdAt}`)
        .addField("Reason:", reason)
        client.botChannel.send(kick);
        message.guild.member(kickedUser).kick(reason);
        return;
    } else {
        message.reply(`You dont have the permission to kick users`);
    };
};

module.exports.data = {
    name: "kick"
}