var Phaser = require('Phaser');
var properties = require('./properties');

var BasicGame = {
  Boot: require('./states/boot.js'),
  Preloader: require('./states/preloader.js'),
  MainMenu: require('./states/mainMenu.js'),
  Game: require('./states/game.js')
};

var game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.AUTO, 'gameContainer');

//  Add the States your game has.
//  You don't have to do this in the html, it could be done in your Boot state too, but for simplicity I'll keep it here.
game.state.add('Boot', BasicGame.Boot);
game.state.add('Preloader', BasicGame.Preloader);
game.state.add('MainMenu', BasicGame.MainMenu);
game.state.add('Game', BasicGame.Game);

//  Now start the Boot state.
game.state.start('Boot');
