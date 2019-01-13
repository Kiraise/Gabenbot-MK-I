module.exports = {
	name: 'sana',
	description: 'No Sana no life',
	guildOnly:true,
	execute(message) {
		message.channel.send({ file: 'https://media.giphy.com/media/BIslp4EBz762k/giphy.gif' });
	},
};
