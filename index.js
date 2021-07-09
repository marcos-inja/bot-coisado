const discord = require('discord.js')
const {prefix, token} = require('./config.json')

const client = new discord.Client()

client.on('ready', () => {
    console.log('online')
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return

	const args = message.content.slice(prefix.length).trim().split(' ')
	const command = args.shift().toLowerCase()

    if (command === 'ping') {
		message.channel.send('Pong.')
	} else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`)
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`)
	}
})

// Comandos básicos
client.on('message', message => {
    
    if (message.content.startsWith('bom dia')) {
        message.channel.send(`Bom dia ${message.author} ☀️`)

    } else if (message.content.startsWith('boa tarde')) {
        message.channel.send(`Boa tarde ${message.author} 🌬️`)

    } else if (message.content.startsWith('boa noite')) {
        message.channel.send(`Boa noite ${message.author} 🌚`)

    } else if (message.content.startsWith('olá bot')) {
        message.channel.send(`Olá ${message.author}!`)

    } else if (message.content === `${prefix}server`) {
		message.channel.send(`O nome do server é: ${message.guild.name}`)
    }
})

client.login(token)