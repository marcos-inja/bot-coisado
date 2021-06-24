const discord = require("discord.js")
const token = require("./token")

const client = new discord.Client()

client.on("ready", ( )=> {
    console.log("online")
})

client.on("message", (msg) => {
    if(msg.content==="porra"){
        msg.channel.send(`vai tomar no cu ${msg.author}`)
    }
})

client.login(token)