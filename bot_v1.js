
const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const client = new Discord.Client();


client.config = config;
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("could't find commands.");
        return;
    }
    jsfile.forEach((f, i) =>{
        if (f == "newCmd.js") return;
        let props = require(`./commands/${f}`);
        console.log(`"${f}" loaded!`);
        client.commands.set(props.data.name, props);
    });
});

client.on('ready', () => {
    console.log(`${client.user.username} is online on ${client.guilds.size} server/s!`);
    client.user.setActivity(`command "${client.config.prefix}"` , {type: "LISTENING"});
});
    
client.on('message', message => {
    if (!message.content.startsWith(client.config.prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    const command = message.content.slice(config.prefix.length);
    const messageArray = command.split(" ");
    const cmd = messageArray[0];
    const args = messageArray.slice(1);
    const file = client.commands.get(cmd);
    client.botChannel = message.guild.channels.find(i =>i.name === `${client.config.botChannel}`);
    if(!client.botChannel) client.botChannel = message.channel;
    if(file) file.run(client, message, args);
    else message.reply(`could't find command "${cmd}"`);

    

});

client.on('guildMemberAdd', member => { 
    let welcome = new Discord.RichEmbed()
        .setColor(client.config.color)
        .addField("ㅤ" , `Wilkommen ${member.user.username}`)
        .setAuthor("Für hilfe schreib !help")
    client.botChannel.send(welcome);
});



client.login(client.config.token);
