const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async (client, message, args) => {
    if (message.author.id === client.config.owner || message.member.hasPermission("MANAGE_MESSAGES") || client.config.trust.includes(message.author.id)){
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let mutetime = args[2];
        if (args == ""){
            message.reply(`Please mention an user.`);
            return;
        } else if(!tomute){
            message.channel.send(`could not find user "${args[0]}."`);return
        } else if (tomute.id === client.config.owner || tomute.id === client.user.id){
            message.reply(`You can't mute this user.`);
            return;
        } else if (mutetime === ""){
            message.reply(`Please give a time.`);
            return;
        } else if (ms(mutetime) === undefined ||ms(mutetime) > ms("1w")){
            message.reply(`please enter a valid time in(s,m,h,d,w). Max 1 week`)
            return;
        } else if(tomute.roles.find(r => r.name === "muted")){
            message.reply(`This user is already muted.`);
            return;
        }
        let muterole = message.guild.roles.find(mr => mr.name === "muted");
        let oldroles = [];
        tomute.roles.forEach(role => {
            oldroles.push(role.id);
            tomute.removeRole(role.id);
        });
        if (!muterole) {
            try {
                muterole = await message.guild.createRole({
                    name: "muted",
                    color: client.config.adminColor,
                    permissions: []
                });
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        SPEAK: false,
                        STREAM: false,
                        CONNECT: false
                    });
                });
            } catch (e) {
                console.log(e.stack);
        }};
        
        message.guild.member(message.mentions.users.first())
                        .addRole(muterole)
                        .catch(console.error);
        
        let muteEmbed = new Discord.RichEmbed()
            .setDescription("Muted:")
            .setColor(client.config.adminColor)
            .addField("Muted User:", `${tomute} (${tomute.id})`)
            .addField("Muted By:", `${message.author} (${message.author.id})`)
            .addField("Time:", `${mutetime}`);
        client.botChannel.send(muteEmbed);

        setTimeout(function(){
            tomute.removeRole(muterole.id);
            try{
            for (var i = 1; i < oldroles.length; i++){
                tomute.addRole(oldroles[i]);
            }}catch(error){return console.log(error)}
            client.botChannel.send(`${tomute} is no longer muted :)`)
        }, ms(mutetime));
    } else {
        message.reply(`You dont have the permission to mute users`);
    };
};

module.exports.data = {
    name: "mute"
}