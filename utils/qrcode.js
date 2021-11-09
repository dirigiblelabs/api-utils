var qrcode = require('utils/v4/qrcode');
for(var propertyName in qrcode) {
	exports[propertyName] = qrcode[propertyName];
}