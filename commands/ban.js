const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    if (message.author.id === client.config.owner || message.member.hasPermission("MANAGE_MESSAGES") || client.config.trust.includes(message.author.id)){
        if (args == ""){
            message.reply(`Please mention an user.`);
            return;
        };
        let banedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!banedUser){
            message.reply(`could not find user "${args[0]}."`);return
        };
        if (banedUser.id === client.config.owner || banedUser.hasPermission("MANAGE_MESSAGES") || banedUser.id === client.user.id){
            message.reply(`You can't ban this user.`);
            return;
        };
        let reason = args.join(" ").slice(22);
        if (reason === ""){
            message.reply(`Please give a reason.`);
            return;
        };
        let ban = new Discord.RichEmbed()
        .setDescription("Ban:")
        .setColor(client.config.adminColor)
        .addField("Baned User:", `${banedUser} (${banedUser.id})`)
        .addField("Baned By:", `${message.author} (${message.author.id})`)
        .addField("Time:", `${message.createdAt}`)
        .addField("Reason:", reason)
        client.botChannel.send(ban);
        message.guild.member(banedUser).ban(reason);
        return;
    } else {
        message.reply(`You dont have the permission to ban users.`);
    };
}

module.exports.data = {
    name:"ban"
}
