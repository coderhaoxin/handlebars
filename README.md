### node-app-seed
* a project for node.js(express) app template

### redis: run redis as a daemon
config:
```bash
# By default Redis does not run as a daemon. Use 'yes' if you need it.
# Note that Redis will write a pid file in /var/run/redis.pid when daemonized.
daemonize yes

# limit memory: 2GB
maxmemory 2*1024*1024*1024
```
run:
```bash
src/redis-server
```

### recommend some global node.js modules
```
[sudo] npm install -g grunt-cli
[sudo] npm install -g mocha
[sudo] npm install -g node-inspector
```

* [mocha](https://github.com/visionmedia/mocha)
* [node-inspector](https://github.com/node-inspector/node-inspector)
* [more grunt plugins](http://gruntjs.com/plugins)

### some useful util modules
* [gm: image process](https://github.com/aheckmann/gm)

```bash
apt-get install imagemagick    #图片处理
```

* [nodemailer](https://github.com/andris9/Nodemailer)
