Project template project for [HTML5 Shoot 'em Up in an Afternoon](https://leanpub.com/html5shootemupinanafternoon)

This Ruby template uses [Middleman](http://middlemanapp.com/) for features like LiveReload and Asset Pipeline (CoffeeScript = goodbye `this.game`, hello `@game`).

To start server:

    $ bundle exec middleman server

To compile everything to the `build` folder for production release:

    $ bundle exec middleman build

Refer to the Middleman docs for other details.

Note that Middleman's Sprockets interface doesn't support audio so `audio_path` won't work. Check out `_preloader.js.erb` for my workaround.
