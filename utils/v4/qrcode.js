exports.generateQRCodeByteArray = function(text){
    var bytes = require("io/v4/bytes");
    return bytes.toJavaScriptBytes(org.eclipse.dirigible.api.v3.utils.QRCodeFacade.generateQRCode(text));
};