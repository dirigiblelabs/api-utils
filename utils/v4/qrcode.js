exports.generateQRCodeByteArray = function(text){
    return org.eclipse.dirigible.api.v3.utils.QRCodeFacade.generateQRCode(text);
};

exports.generateQRCode = function(qrText, workspaceName, projectName, fileName){
    const EXTENSION      = ".png";

    var workspaceManager = require("platform/v4/workspace");
    var qrCodeByteArray  = org.eclipse.dirigible.api.v3.utils.QRCodeFacade.generateQRCode(qrText);

    workspaceManager.getWorkspace(workspaceName).getProject(projectName).createFile(fileName + EXTENSION).setContent(qrCodeByteArray);
};