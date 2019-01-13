module.exports = {
	name: 'ping',
	description: 'Ping!',
	aliases: ['hey'],
	execute(message) {
		message.channel.send({ file: 'https://thumbs.gfycat.com/InsecurePointedAustraliankestrel-size_restricted.gif' });
	},
};
