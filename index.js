const discord = require('discord.js')
const {prefix, token} = require('./config.json')

const client = new discord.Client()

client.on('ready', () => {
    console.log('online')
})

client.on('message', msg => {
    
    if (msg.content.startsWith('bom dia')) {
        msg.channel.send(`Bom dia ${msg.author} ☀️`)

    } else if (msg.content.startsWith('boa tarde')) {
        msg.channel.send(`Boa tarde ${msg.author} 🌬️`)

    } else if (msg.content.startsWith('boa noite')) {
        msg.channel.send(`Boa noite ${msg.author} 🌚`)

    } else if (msg.content.startsWith('olá bot')) {
        msg.channel.send(`Olá ${msg.author}!`)

    } else if (msg.content === `${prefix}server`) {
		msg.channel.send(`O nome do server é: ${msg.guild.name}`)
    }
})

client.login(token)