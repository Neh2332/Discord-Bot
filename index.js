const Discord = require('discord.js')
const config = require('./config.json')
const fs = require('fs');
const path = require('path');
const { createAudioPlayer, createAudioResource, joinVoiceChannel } = require('@discordjs/voice');
const { reset } = require('nodemon');
const player = createAudioPlayer();
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildVoiceStates,
    Discord.GatewayIntentBits.MessageContent
  ]
})



const songswarwick = [
    './Warwick.ogg',
    './Warwick2.ogg',
    './Warwick3.ogg',
    './Warwick4.ogg',
    './Warwick5.ogg',
    './Warwick6.ogg',
    './Warwick7.ogg',
    './Shen.ogg',

]

//create an array from a folder
const folder = './Yone-VoiceLines';
const songsyone = fs.readdirSync(folder).map(file => path.join(folder, file));


const pomosongs = [
    './Shen.ogg',
]



client.on('messageCreate', async message => {
    if (message.content === '!warwick') {
        message.reply('Warwick is here!');
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        
        const resource = createAudioResource(songswarwick[Math.floor(Math.random() * songswarwick.length)]);
        player.play(resource);
        connection.subscribe(player);

    }
    }) 

client.on('messageCreate', async message => {
    if (message.content === '!disconnect') {
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        connection.destroy();
    }
 })


    const yonerandint = Array.from({length: 60000}, (_, i) => i + 30000);
   
    const yonerand = yonerandint[Math.floor(Math.random() * yonerandint.length)];


client.on('messageCreate', async message => {
    if (message.content === '!yone') {
        message.reply('Yone is here!');
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        const resource = createAudioResource(songsyone[Math.floor(Math.random() * songsyone.length)]);
        player.play(resource);
        connection.subscribe(player);
        var yoneint = setInterval(yoneinterval, yonerand);
    }


function yoneinterval(){
    const connection = joinVoiceChannel({
        channelId: message.member.voice.channelId,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
    });
        const resource = createAudioResource(songsyone[Math.floor(Math.random() * songsyone.length)]);
        player.play(resource);
        connection.subscribe(player);
}

client.on('messageCreate', async message => {
    if (message.content === '!stop') {
        message.reply('no more yone!');
        clearInterval(yoneint);
        
    }
})
})

client.on('messageCreate', async message => {
    if (message.content === '!break') {
        process.exit(1);
        
    }
})





client.on('messageCreate', async message => {
    if (message.content === '!pomodoro 20 5') {
        message.reply('Pomodoro timer started!');
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
   
    var pomodoro = setInterval(pomodorointerval, 20000);
    var shortbreak = setInterval(shortbreakinterval, 5000);
  

  
    function pomodorointerval()
    {
        const resource = createAudioResource(pomosongs[Math.floor(Math.random() * pomosongs.length)]);
        player.play(resource);
        connection.subscribe(player);
        message.reply('Pomodoro timer finished!');
        clearInterval(pomodoro);
        clearInterval(shortbreak);
    }
   
    function shortbreakinterval()
    {
        const resource = createAudioResource(pomosongs[Math.floor(Math.random() * pomosongs.length)]);
        player.play(resource);
        connection.subscribe(player);
        message.reply('Short break finished!');
        clearInterval(pomodoro);
        clearInterval(shortbreak);
    }
    }
    })





client.login(config.token)
