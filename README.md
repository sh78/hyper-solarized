# Hyper > Solarized One 🕐

One theme to rule them both.

![sample.gif](sample.gif?raw=true)

![light](sample-light.png?raw=true)

![dark](sample-dark.png?raw=true)

## Background 🎨

PUN INTENDED.

Upon switching from [iTerm](https://www.iterm2.com/) to Hyper, I missed the ability to easily change the color palette 1) via keyboard shortcut, and 2) [based on time of day](https://github.com/sh78/dotfiles/blob/a5aeed851ad439c2ca13591fa908b419a91566b6/.config/omf/init.fish#L36). This solves #2 (for now), and is halfway to solving #1.

Issue #3 is that all of the Solarized themes on npm broke down while using vim with Ethan Schoonover's [vim-colors-solarized](/altercation/vim-colors-solarized); vim was almost unusable due to lack of visibility, due to weird color assignments.

## Features ✅

- Works with [the official vim Solarized color
scheme](https://github.com/altercation/vim-colors-solarized). No crazy
background color dissonance here.
- Dark/light variant can be controlled via `exports.config` in `.hyper.js`.
- Automatically switch between color variants **based on time of day** 🎊 🎁 🎉 #winning #programming #healthyeyes #thefutureisnow  
  - Gets along splendidly with a simple [vimscript block](https://github.com/sh78/dotfiles/blob/a5aeed851ad439c2ca13591fa908b419a91566b6/.vimrc#L315) of the same purpose.

- Keyboard shortcut may be added in a future release, unless there's already a Hyper extension for toggling settings with the keyboard.

## Getting Started 🥇

### Installation 🖥

```shell
hyper i hyper-solarized
```

### Configuration ⚙️

The theme defaults to the dark variant. Switch to the light variant by setting this in your `.hyper.js`:

```js
solarized: {
    'light': true
}
```

To set up automatic color variant switching:

```js
solarized: {
  solarized: {
  lightTheme: true,
  light: "08:00",
  dark: "18:00",
},
```

The values must be strings formatted like `HH:MM` and use 24-hour time, otherwise unexpected shenanigans may occur.


## Contributing 👥

Problems? Questions, comments, concerns? Open an issue or better yet a **pull request**!

License: MIT (because npm yells at you for typing in 'steal').

### TODO: 🚨

- Bind keyboard shortcut to toggle theme temporarily.
- Change white text in tab bar for light variant.
- Set highlight colors to inverted base colors (use must comment out their own
highlight conf).

## Credits 👏🏽

Praise be to [Ethan Schoonover](http://ethanschoonover.com/) for blessing our eyes with the Solarized.

Thanks [@wesbos](https://wesbos.com/) for helping me quickly assimilate with ES6.

This is a fork of [Noskcaj19](/Noskcaj19)/**[hyper-solarized](/Noskcaj19/hyper-solarized)**, which was the only hyper solarized theme I found that didn't ravage vim.
