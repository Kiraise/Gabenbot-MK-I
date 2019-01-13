module.exports = {
	name: 'punish',
	description: 'tag a member and here comes phillip',
	guildOnly:true,
	execute(message) {
    if (!message.mentions.users.size) {
			return message.reply('you need to tag a user...I\'m actually triggered...');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You find yourself face to face with Phillip. Good luck, ${taggedUser.username}.`);
	},
};
