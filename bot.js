const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.json

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'Ping') {
    await interaction.reply('Pong');
  }

  if (!msg.content.startsWith(prefix)) {
    return;
}
if (msg.content.toLowerCase() === prefix + 'Adın ne' ) {
 msg.reply('Enes Çakıcı yani RACON makinesi')
}
if (msg.content.toLowerCase() === prefix + 'Foto' ) {
 msg.reply('https://cdn.discordapp.com/attachments/730532320607469580/947499887128367114/IMG-20220227-WA0008.jpg')
}

});

client.login('OTQ3NDY1NTI4OTU0NDYyMjI5.YhtqCQ.1wh11CE4gCq7ggtXcFb3BTPslR8');