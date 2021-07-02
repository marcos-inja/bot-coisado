const discord = require("discord.js")
const token = require("./token.js")

const client = new discord.Client()

client.on("ready", () => {
    console.log("online")
})

client.on("message", (msg) => {
    if (msg.content.toLocaleLowerCase() == "bom dia") {
        msg.channel.send(`Bom dia ${msg.author} ☀️`)

    } else if (msg.content.toLocaleLowerCase() == "boa tarde") {
        msg.channel.send(`Boa tarde ${msg.author} 🌬️`)

    } else if (msg.content.toLocaleLowerCase() == "boa noite") {
        msg.channel.send(`Boa noite ${msg.author} 🌚`)
    }
})

client.on("guildMemberAdd", member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'geral')
    if ( !channel) return

    channel.send(`Bem vindo ao servidor, ${member}`)
})

client.login(token)