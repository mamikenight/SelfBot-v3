const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
  message.delete();
  guild.createChannel(kanal, 'KANAL');
    guild.createChannel(kanal, 'KANAL');

    guild.createChannel(kanal, 'KANAL');



  message.channel.send("**Yazı Kanalı Oluşturuldu!**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '-iptal-js-1',
  description: 'Bir ses kanalı açar',
  usage: 'metin-kanalı-aç [açmak istediğiniz kanalın adı]'
};