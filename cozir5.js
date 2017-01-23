
const VersalinkDevice = require('@agilatech/versalink-device');
const device = require('@agilatech/cozir5');

module.exports = class Cozir5 extends VersalinkDevice {
    
    constructor(options) {
        
        // The file must be defined. If not supplied in options, then default to ttyS2
        const file  = options['file'] || "/dev/ttyS2";
        
        const hardware = new device.Cozir5(file);
        
        super(hardware, options);
        
    }
}

