const http = require('http');
const express = require('express');
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const Jimp = require('jimp');
const db = require('quick.db');
let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));
let kufurEngel = JSON.parse(fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8"));
let kanal = JSON.parse(fs.readFileSync("././jsonlar/mLog.json", "utf8"));
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(aliases => {
      client.aliases.set(aliases, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
//////////////////
///////////////////////////////////
setInterval(() => {
  client.channels.get("682729567089328192").join()
}, 2700000)
/////
setInterval(() => {
  client.channels.get("653606259664093190").join()
}, 1800000)
//pingleme başlar
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  http.get(`http://dt-at-site.glitch.me/`);
}, 28000);
//pingleme biter

/*
client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı!  Mesajı : ${msg.content} Yazan: ${msg.author.tag}`);
  client.channels.get("683621261729071112").send(`${msg.content} Yazan: <@&654709805386039296> @everyone **CodeMareFi Sunucumuza Bekleriz davet Linki """a3pFEWX"""**`)
});

client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı!  Mesajı : ${msg.content} Yazan: ${msg.author.tag}`);
  client.channels.get("682658187966808237").send(`${msg.content} Yazan: <@&673908418821619752> @everyone **CodeMareFi Sunucumuza Bekleriz davet Linki """a3pFEWX"""**`)
});

client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı!  Mesajı : ${msg.content} Yazan: ${msg.author.tag}`);
  client.channels.get("682658187966808237").send(`${msg.content} Yazan: <@&673908418821619752> @everyone **CodeMareFi Sunucumuza Bekleriz davet Linki """a3pFEWX"""**`)
});

client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı!  Mesajı : ${msg.content} Yazan: ${msg.author.tag}`);
  client.channels.get("682658187966808237").send(`${msg.content} Yazan: <@&673908418821619752> @everyone **CodeMareFi Sunucumuza Bekleriz davet Linki """a3pFEWX"""**`)
});

client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı!  Mesajı : ${msg.content} Yazan: ${msg.author.tag}`);
  client.channels.get("682658187966808237").send(`${msg.content} Yazan: <@&673908418821619752> @everyone **CodeMareFi Sunucumuza Bekleriz davet Linki """a3pFEWX"""**`)
});

client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı!  Mesajı : ${msg.content} Yazan: ${msg.author.tag}`);
  client.channels.get("682658187966808237").send(`${msg.content} Yazan: <@&673908418821619752> @everyone **CodeMareFi Sunucumuza Bekleriz davet Linki """a3pFEWX"""**`)
});

client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı!  Mesajı : ${msg.content} Yazan: ${msg.author.tag}`);
  client.channels.get("682658187966808237").send(`${msg.content} Yazan: <@&673908418821619752> @everyone **CodeMareFi Sunucumuza Bekleriz davet Linki """a3pFEWX"""**`)
});

client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı!  Mesajı : ${msg.content} Yazan: ${msg.author.tag}`);
  client.channels.get("682658187966808237").send(`${msg.content} Yazan: <@&673908418821619752> @everyone **CodeMareFi Sunucumuza Bekleriz davet Linki """a3pFEWX"""**`)
});

*/






client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        const mhdm = new Discord.RichEmbed()
         .setTitle(`${client.user.username} - Dm Mesaj`)
         .setColor("BLACK")
         .addField(`Mesajı Gönderen`,message.author.tag)
         .addField(`Mesajı Gönderen ID`,message.author.id)
         .addField(`Gönderilen Mesaj`,message.content)
         .setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL)
         .setThumbnail(message.author.avatarURL) 
    client.channels.get("677580564206977038").send(mhdm); // channel ID girmeyi unutmayın!
    }
});
//////////////////
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
    if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 7;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 5;
  if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 6;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
