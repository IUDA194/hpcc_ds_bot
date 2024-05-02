const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');
const client = new Client();

let connection;
let manager_usernaames = ["delayersound", "iuda194", "polivanovpavlo"]

function contains(arr, elem) {
    console.log(arr.indexOf(elem))
    return arr.indexOf(elem) != -1;
 }

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
})

client.on('messageCreate', async (message) => {
    if (contains(manager_usernaames, message.author.username)) {

        if (message.content.startsWith("#connect")){
            const channel = client.channels.cache.get('1230225394737610782');
            connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
                selfDeaf: false,
                selfMute: true,
                selfVideo: true
            })

    }

    if (message.content.startsWith("#disconnect")) {
        connection.disconnect()
    }   
        if (message.content.startsWith("#send")) {
            s_s = message.content.split(" ")

            console.log(s_s.slice(1))

            let c_id = ""

            switch (s_s[1]) {
                case "укр_літ":
                    c_id = "1232450496183144528"
                default:
                    c_id = s_s[1]
            };

            const channel_t = client.channels.cache.get(c_id);
            channel_t.send(s_s.slice(2).join(" "))
        }   
    }
});

client.login("");