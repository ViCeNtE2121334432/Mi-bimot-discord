const keepAlive = require('./server');

const Monitor = require('ping-monitor');

keepAlive();

const monitor = new Monitor({
	website: 'https://replit.com/@nithtbotdedirec/HurtfulPointlessPrograms',

	title: 'HurtfulPointlessPrograms',

	interval: 5 // minutes
});

monitor.on('up', res => console.log(`${res.website} It is on.`));

monitor.on('down', res =>
	console.log(`${res.website} It is down - ${res.statusMessage}`)
);

monitor.on('stop', website => console.log(`${website} It has stopped.`));

monitor.on('error', error => console.log(error));

const Aoijs = require('aoi.js');
const bot = new Aoijs.Bot({
	token: 'ODMxMzQwMjI0MTgwMzg3OTAx.YHTz6g.yvSaf5sMhart9yP1M9vInIeXLUo', //Discord Bot Token
	prefix: '%', //Customizable
	mobile: true
});
bot.onMessage(); //Allows to run Commands


bot.status({
  text: 'actualizando codigo',
  type: 'PLAYING',
  status:'dnd',
  time: 30
});

