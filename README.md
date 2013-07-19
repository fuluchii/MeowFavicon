# MeowFavicon

A tiny lib to change favicon dynamically.

Inspired by pomatodo.com's favicon.

DEMO:[http://letsparty.fuluchii.me/](http://letsparty.fuluchii.me/)

## Usage:
#####initial

`var meow = getMeow({});`

#####change favicon immediately

`meow.changeFavicon(url);`

#####a fade in favicon

`meow.fadeinFavicon('/favicon.ico',6000)`

#####let the favicon be a countdown clock

`meow.countdown(0,'#00a3cf',6000);`

AND Special thanks to Mr.Meow.

\#对的你们最后都问我为什么这个demo点了之后没有变化...
