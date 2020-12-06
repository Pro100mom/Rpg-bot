const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");
const config = require("../config.json")

exports.run = async (client, message, args) => {
      
  if(message.author.id !== config.owner) return; 

        let user = message.author;
      
        let timeout = 0;
        let amount = 8000;
      
        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
      
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
          let time = ms(timeout - (Date.now() - daily));
        
          let timeEmbed = new Discord.MessageEmbed()
          .setColor("#7CFC00")
          .setDescription(`**Вы уже получили свою ежедневную награду \n Соберите ее снова через ${time.hours}h ${time.minutes}m ${time.seconds}s**`);
          message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new Discord.MessageEmbed()
        .setColor("#7CFC00")
        .setDescription(` Вы получили ежедневную награду в размере ${amount} монеты`);
        message.channel.send(moneyEmbed)
        db.add(`bal_${message.guild.id}_${user.id}`, amount)
        db.set(`xxp_${message.guild.id}_${user.id}`, 10)
        db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
      
      
        }
      };  

      exports.conf = {
        aliase:[]
    }
    
    exports.help = {
        name:"test",
        usage:"addMoney userID / addMoney @user",
        description:"Add money."
    }