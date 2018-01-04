const VersalinkDevice = require(process.versalink.device);
const device = require('@agilatech/cozir5');

module.exports = class Cozir5 extends VersalinkDevice {
    
    constructor(config) {
        
        // The file must be defined. If not supplied in config options, then default to ttyS2
        const file  = config['file'] || "/dev/ttyS2";
        
        const hardware = new device.Cozir5(file);
        
        super(hardware, config);
        
    }
}

