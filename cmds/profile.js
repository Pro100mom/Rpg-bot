const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {

  let user; 
  if(!args[0]) user = message.author
  if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
  if(args[0] && !isNaN(args[0])){
      user = client.users.cache.get(args[0]);
      if(!message.guild.members.cache.has(args[0])) return message.channel.send(`:x: **Пользователь не найден.**`)
  }

  let bal = db.fetch(`bal_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (bank === null) bank = 0;

  let nbal = await db.fetch(`nbal_${message.guild.id}_${user.id}`)

  if (nbal === null) nbal = 0;

  let LevelBoss = await db.fetch(`LevelBoss_${message.guild.id}_${user.id}`)

  if (LevelBoss === null) LevelBoss = 1;

  let vip = await db.fetch(`vip_${message.guild.id}_${user.id}`)

  if (vip === null) vip = "Нету";

  let damage = db.fetch(`damage.${user.id}`) || "3"
  let navics = db.fetch(`navics.${user.id}`) || "0"
  let armor = db.fetch(`armor.${user.id}`) || "2"
  let duel = db.fetch(`duel.${user.id}`) || "0"
  let boss = db.fetch(`boss.${user.id}`) || "0"
  let dboss = db.fetch(`dboss.${user.id}`) || "0"
  let busts = db.fetch(`busts.${user.id}`) || "0"
  let pet = db.fetch(`pet.${user.id}`) || "Нету"
  let wep = db.fetch(`wep.${user.id}`) || "Кулаки"
  let guildsn = db.fetch(`guildsn.${user.id}`) || "Нету"
  
  let Prembed = new Discord.MessageEmbed()
  .setColor("#7CFC00")
  .setTitle(`Профиль ${user.tag}`)
  .setTimestamp()
  .setAuthor(user.tag,user.avatarURL())
  .setDescription(`**Экономика** \n   ▪▸Кредитов: \`${bal.toString()}\` \n   ▪▸Небесных кредитов: \`${nbal.toString()}\` \n   ▪▸Вип: \`${vip.toString()}\` \n   ▪▸Бустов: \`${busts.toString()}\`
  \n **Рпг** \n   ▪▸Гильдия: \`${guildsn.toString()}\`\n   ▪▸Броня: \`${armor.toString()}\` \n  ▪▸Оружие: \`${wep.toString()}\` \n ▪▸Урон: \`${damage.toString()}\` \n   ▪▸Питомец: \`${pet.toString()}\` \n   ▪▸Уровень босса: \`${LevelBoss.toString()}\` \n   ▪▸Убито боссов: \`${boss.toString()}\``)
  message.channel .send(Prembed)

};

exports.conf = {
    aliase:[]
}

exports.help = {
    name:"profile",
    usage:"addMoney userID / addMoney @user",
    description:"Add money."
}