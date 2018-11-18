const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("sf.")

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'être un assistant pour le staff', type: 0}});
    console.log("Je suis prêt !");
});

bot.login('NTEzNDY3NDM4MTM0OTg0NzA0.DtIfyQ.O9Z08nIbblaRmpvO3DRK8s54jgk');

bot.on('message', message => {
    if (message.content === "Bonjour assistante"){
        message.reply("enchanté de vous voir, je vous shouaite une bonne journée/soirée");
        console.log('pingpong');
    }

    if (message.content === prefix + "sanction"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#3893C7')
            .addField("**Commande de sanction**", "*/mute [Pseudo avec le @] [Temps]\n /warn [Peusdo avec le @] [Raison] \n /kick [Pseudo avec le @] [Raison]*")
        message.channel.sendEmbed(help_embed);
        console.log("sanction");
    }

    if (message.content === prefix + "bienvenue"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#3893C7')
            .addField("**SF - Staff**", "*Bienvenue dans le discord du staff de Solary Fortnite.*")
        message.channel.sendEmbed(help_embed);
        console.log("bienvenue");
    }

    if (message.content === prefix + "réponse"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#3893C7')
            .addField("**Besoin d'une réponse ?**", "https://www.la3f.fr/dev/solareponse/")
        message.channel.sendEmbed(help_embed);
        console.log("réponse");
    }

    if (message.content === prefix + "commandes"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#3893C7')
            .addField("**Besoin d'une commande ?**", "*→ sf.sanction \n→ sf.bienvenue \n→ sf.réponse \n→ sf.commandes*")
        message.channel.sendEmbed(help_embed);
        console.log("commandes");
    }

});
