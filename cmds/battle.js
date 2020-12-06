const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

    let user = message.author;

    db.fetch(`bal_${message.guild.id}_${user.id}`)

    db.fetch(`nbal_${message.guild.id}_${user.id}`)
    
    let LevelBoss = db.fetch(`LevelBoss_${message.guild.id}_${user.id}`)

    let bdaily = Math.floor(Math.random() * 100);

    let bndaily = Math.floor(Math.random() * 8);

    let oneboss = Math.floor(Math.random() * 90);

    if (args[0] == 'Босс', 'босс', 'Boss', 'boss') {

        let Boy1 = new Discord.MessageEmbed()
        .setColor("#7CFC00")
        .setTitle("Бой")
        .addField('Хп босса:', `\`${oneboss.toString()}\``)

        message.channel.send(Boy1).then(async msg => {
            setTimeout(function () {
                let Boy = new Discord.MessageEmbed()
                .setColor("#7CFC00")
                .setTitle("Бой")
                .addField('**Ты получил:**',`Кредитов: \`${bdaily.toString()}\` \n  Небесных кредитов: \`${bndaily.toString()}\``)
         
                message.channel.send(Boy)
            }, 7000)
        })

        db.add(`bal_${message.guild.id}_${user.id}`, bdaily)
        db.add(`nbal_${message.guild.id}_${user.id}`, bndaily)
        db.add(`boss.${message.author.id}`, 1)
    } else if(args[0] == 'Топор') {
        let Embed2 = new Discord.MessageEmbed()
       .setColor("#7CFC00")
        .setDescription(`**Вам нужно 1900 монет для покупки Топора**`);

        if (boss < 20) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.add(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
       .setColor("#7CFC00")
        .setDescription(`**Ты купил Топор*`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1900)
        db.set(`damage.${message.author.id}`, 11)
        db.set(`wep.${message.author.id}`, "Топор")
        db.add(`LevelBoss_${message.guild.id}_${user.id}`, 2)
        message.channel.send(Embed3)
    } else {
        let embed3 = new Discord.MessageEmbed()
       .setColor("#7CFC00")
        .setDescription('Укажи босса')
        message.channel.send(embed3)
    }

}

exports.conf = {
    aliase:[]
}

exports.help = {
    name:"",
    usage:"addMoney userID / addMoney @user",
    description:"Add money."
}