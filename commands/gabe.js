module.exports = {
	name: 'gabe',
	description: 'Gaben status',
	aliases: ['gaben'],
	guildOnly:true,
	execute(message) {
		message.channel.send('Gaben status: currently in Phillip\'s dungeon.');
	},
};
