module.exports = {
	name: 'prune',
	description: 'prune n amount of messages (n < 99)',
	args: true,
	usage: '<1-99>',
	guildOnly:true,
	execute(message, args) {
    const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that\'s not a real number... I\'m ACTUALLY triggered...');
		}
		else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99...humans are inferior.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('There was an error trying to prune messages in this channel. It was probably your fault tbh.');
		});
	},
};
