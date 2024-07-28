require('dotenv')
const { Client,Util, Collection,MessageEmbed,Structures } = require("discord.js");
const keepAlive = require('./server.js')
keepAlive()
async function errorEmbed(text,message){
      const newembed = new Discord.MessageEmbed()
      .setColor("#FF7676")
      .setDescription(``)
       return message.channel.send(newembed);
    }
const Discord = require('discord.js');
const client = new Client({
    disableEveryone: true
})
const axios = require("axios")
const channel_id = process.env.ID


client.on('message', async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  try {
  if (message.channel.id != channel_id) return
  let res = await axios.get(``);
  message.reply(res.data.cnt);
  } catch {
   errorEmbed(``,message)
   }
})

client.on('ready', async () => {
    console.clear()
    console.log(``)
  client.user.setPresence({
        activity: {
            name: '',
            type: ''
        },
        status: ''
    });
});

client.login(process.env.TOKEN);