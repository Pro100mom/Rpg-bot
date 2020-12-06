const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#7CFC00")
        .setDescription(`**Вы уже подрабатывали недавно \n \nПопробуйте снова в ${time.minutes}m ${time.seconds}s **`);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['«Программистом', 'Строителём', 'Официантом', 'Полицейским', 'Шефом', 'Механиком']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 400) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#7CFC00")
        .setDescription(`Вы подрабатывали ${replies[result]} и заработали ${amount} монет`);
        message.channel.send(embed1)
        
        db.add(`bal_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}

exports.conf = {
    aliase:[]
}

exports.help = {
    name:"work",
    usage:"addMoney userID / addMoney @user",
    description:"Add money."
}