(function() {
  var Preloader = function (game) {

    this.background = null;
    this.preloadBar = null;

    //this.ready = false;

  };

  Preloader.prototype = {

    preload: function () {

      //  Show the loading progress bar asset we loaded in boot.js
      this.stage.backgroundColor = '#2d2d2d';

    this.preloadBar = this.add.sprite(this.game.width / 2 - 100, this.game.height / 2, 'preloaderBar');
    this.add.text(this.game.width / 2, this.game.height / 2 - 30, "Loading...", { font: "32px monospace", fill: "#fff" }).anchor.setTo(0.5, 0.5);

      //  This sets the preloadBar sprite as a loader sprite.
      //  What that does is automatically crop the sprite from 0 to full-width
      //  as the files below are loaded in.
      this.load.setPreloadSprite(this.preloadBar);

      //  Here we load the rest of the assets our game needs.
      this.load.image('titlepage', 'images/titlepage.png#grunt-cache-bust');
      this.load.image('sea', 'images/sea.png#grunt-cache-bust');
      this.load.image('bullet', 'images/bullet.png#grunt-cache-bust');
      this.load.image('enemyBullet', 'images/enemy-bullet.png#grunt-cache-bust');
      this.load.image('powerup1', 'images/powerup1.png#grunt-cache-bust#grunt-cache-bust');
      this.load.spritesheet('greenEnemy', 'images/enemy.png#grunt-cache-bust', 32, 32);
      this.load.spritesheet('whiteEnemy', 'images/shooting-enemy.png#grunt-cache-bust', 32, 32);
      this.load.spritesheet('boss', 'images/boss.png#grunt-cache-bust', 93, 75);
      this.load.spritesheet('explosion', 'images/explosion.png#grunt-cache-bust', 32, 32);
      this.load.spritesheet('player', 'images/player.png#grunt-cache-bust', 64, 64);
      this.load.audio('explosion', ['assets/explosion.ogg', 'assets/explosion.wav']);
      this.load.audio('playerExplosion', ['assets/player-explosion.ogg', 'assets/player-explosion.wav']);
      this.load.audio('enemyFire', ['assets/enemy-fire.ogg', 'assets/enemy-fire.wav']);
      this.load.audio('playerFire', ['assets/player-fire.ogg', 'assets/player-fire.wav']);
      this.load.audio('powerUp', ['assets/powerup.ogg', 'assets/powerup.wav']);
      //this.load.audio('titleMusic', ['audio/main_menu.mp3']);
      //  + lots of other required assets here

    },

    create: function () {

      //  Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
      this.preloadBar.cropEnabled = false;

    },

    update: function () {

      //  You don't actually need to do this, but I find it gives a much smoother game experience.
      //  Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
      //  You can jump right into the menu if you want and still play the music, but you'll have a few
      //  seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
      //  it's best to wait for it to decode here first, then carry on.
      
      //  If you don't have any music in your game then put the game.state.start line into the create function and delete
      //  the update function completely.
      
      //if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
      //{
      //  this.ready = true;
        this.state.start('MainMenu');
      //}

    }

  };
  module.exports = Preloader;

}).call(this);
