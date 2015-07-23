yify-pop
========

[![Join the chat at https://gitter.im/yify-pop/yify-pop](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/yify-pop/yify-pop?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/yify-pop/yify-pop.svg)](https://david-dm.org/yify-pop/yify-pop)  [![Code Climate](https://codeclimate.com/github/yify-pop/yify-pop/badges/gpa.svg)](https://codeclimate.com/github/yify-pop/yify-pop)  
Inspired by popcorn-app, a node web server to stream torrents from yify. Built using Geddy and the webtorrent library.

Requirements
------------
***Node >=0.10.39***

Install from http://nodejs.org/ or use https://github.com/creationix/nvm

***Geddy 13.0.7***

```
[sudo] npm -g install geddy
```

***WebTorrent 0.50.x***

```
[sudo] npm -g install webtorrent
```


Getting Started
---------------
1. Open a command line and change to the directory

2. Run `npm install` to install dependencies

3. Run `geddy gen secret` to generate a unique secret

4. Run `geddy` to start the server

5. Visit [http://localhost:4000](http://localhost:4000) in your browser

Enjoy!
