// main bot file

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}
// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Let\'s get this bread');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (command.guildOnly && message.channel.type !== 'text') {
    return message.reply('I can\'t execute that command inside DMs');
  }

  if (command.args && !args.length) {
    let reply = 'You didn\'t provide any arguments, ${message.author}.';

    if (command.usage) {
      reply += '\nThe proper usage would be: \'${prefix}${command.name} ${command.usage}\'';
    }

    return message.channel.send(reply);
  }

  try {
    command.execute(message, args);
  }
  catch (error) {
    console.error(error);
    message.reply('Alright someone fked up.');
  }
});

// login to Discord with app's token: calls from config.json
client.login(token);
