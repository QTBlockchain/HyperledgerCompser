'use strict';

/**
 * Register Student Kyc
 * @param {org.qt.blockchain.hyperledger.kyc.RegisterStudentKyc} studentKyc
 * @transaction
 */
function onRegisterStudentKycs(studentKyc) {
    var assetRegistry;
    var informationId = studentKyc.information.informationId;
    return getAssetRegistry('org.qt.blockchain.hyperledger.kyc.StudentInformation')
        .then(function (ar) {
            assetRegistry = ar;
            return assetRegistry.get(informationId);
        })
        .then(function (studentInformation) {
            studentInformation.isVerified = true;
            return assetRegistry.update(studentInformation);
        });
}