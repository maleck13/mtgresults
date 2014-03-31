var bunyan = require('bunyan');

var mainLog = bunyan.createLogger({
  name: 'mtggauntlet',
  streams: [
    {
      level: 'info',
      stream: process.stdout           // log INFO and above to stdout
    },
    {
      level: 'error',
      path: '/var/log/mtggauntlet/log.log'  // log ERROR and above to a file
    }
  ]
});


module.exports = {
  "mainLog" : mainLog
};

