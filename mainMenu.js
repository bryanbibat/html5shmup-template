
BasicGame.MainMenu = function (game) {

  this.music = null;
  this.playButton = null;

};

BasicGame.MainMenu.prototype = {

  create: function () {

    //  We've already preloaded our assets, so let's kick right into the Main Menu itself.
    //  Here all we're doing is playing some music and adding a picture and button
    //  Naturally I expect you to do something significantly better :)

    this.add.sprite(0, 0, 'titlepage');

    this.loadingText = this.add.text(510, 520, "Press Z or tap/click game to start", { font: "24px monospace", fill: "#fff" });
    this.loadingText.anchor.setTo(0.5, 0.5);
    this.add.text(510, 680, "image assets Copyright (c) 2002 Ari Feldman", { font: "16px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);
    this.add.text(510, 700, "sound assets Copyright (c) 2012 - 2013 Devin Watson", { font: "16px monospace", fill: "#fff", align: "center"}).anchor.setTo(0.5, 0.5);

  },

  update: function () {

    if (this.input.keyboard.isDown(Phaser.Keyboard.Z) || this.input.activePointer.isDown) {
      this.startGame();
    }
    //  Do some nice funky main menu effect here

  },

  startGame: function (pointer) {

    //  Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
    // this.music.stop();

    //  And start the actual game
    this.state.start('Game');

  }

};
