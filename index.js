const discord = require('discord.js')
const config = require('./config.json')

const client = new discord.Client()

client.on("ready", () => {
    console.log("online")
})

client.on('message', (msg) => {
    if (msg.content.toLocaleLowerCase() == 'bom dia') {
        msg.channel.send(`Bom dia ${msg.author} ☀️`)

    } else if (msg.content.toLocaleLowerCase() == 'boa tarde') {
        msg.channel.send(`Boa tarde ${msg.author} 🌬️`)

    } else if (msg.content.toLocaleLowerCase() == 'boa noite') {
        msg.channel.send(`Boa noite ${msg.author} 🌚`)

    } else if (msg.content.toLocaleLowerCase() == 'olá bot') {
        msg.channel.send(`Olá ${msg.author}!`)
    }
})

client.login(config.token)