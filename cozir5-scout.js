
const options = require('./options');

const Scout = require('zetta-scout');
const cozir5 = require('./cozir5');
const util = require('util');

const Cozir5Scout = module.exports = function(opts) {
    
  // see if any of the options were overridden in the server

  if (typeof opts !== 'undefined') {
    // copy all options defined in the server
    for (const key in opts) {
      if (typeof opts[key] !== 'undefined') {
        options[key] = opts[key];
      }
    }
  }

  Scout.call(this);
};

util.inherits(Cozir5Scout, Scout);

Cozir5Scout.prototype.init = function(next) {

  const self = this;

  const Cozir5 = new cozir5(options);

  const query = this.server.where({name: 'COZIR5'});
  
  this.server.find(query, function(err, results) {
    if (results[0]) {
      self.provision(results[0], Cozir5, options);
      self.server.info('Provisioned COZIR5');
    } else {
      self.discover(Cozir5, options);
      self.server.info('Discovered new device COZIR5');
    }
  });

  next();

};
