'use strict';
/**
 * Write your transction processor functions here
 */


/**
 * Sample transaction
 * @param {org.qt.blockchain.hyperledger.mobileport.portMobileNumber} portMobileNumber
 * @transaction
 */
function onPortMobileNumber(portMobileNumber) {
    var assetRegistry;
    var id = portMobileNumber.mobileNumber.number;
    return getAssetRegistry('org.qt.blockchain.hyperledger.mobileport.MobileNumber')
        .then(function (ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function (asset) {

            asset.vendor = portMobileNumber.proposedVendor;
            return assetRegistry.update(asset);
            
        })
}
