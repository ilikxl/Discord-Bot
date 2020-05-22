
const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    var bilder = ["https://images.theconversation.com/files/177834/original/file-20170712-14488-19lw3sc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" , "https://miro.medium.com/max/1400/1*QK3BCQ178WBWUcKSnEw_xA.jpeg" , "https://hamburg.mitvergnuegen.com/wp-content/uploads/sites/2/2018/01/maxresdefault-680x383.jpg" , "https://www.google.com/search?q=memes&safe=active&client=safari&rls=en&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjn4euj-pLpAhUqQxUIHSCqCEAQ_AUoAXoECBYQAw&biw=1440&bih=837#imgrc=nR2hPDHFuHO0lM" , "https://www.abendzeitung-muenchen.de/media.media.bc7e2cc4-ecd0-4c6a-b7f0-9d0c4b27ac96.original1024.jpg"]
    var randomNumber = Math.floor(Math.random() * 6); 
    client.botChannel.send(bilder [randomNumber])
}
;

module.exports.data = {
    name: "meme"
}