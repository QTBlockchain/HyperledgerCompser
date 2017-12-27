'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.qt.blockchain.hyperleder.samples.SellVehicle} sellVehicle
 * @transaction
 */
function onChangeAssetValue(sellVehicle) {
    var assetRegistry;
    var registrationNumber = sellVehicle.bike.registrationNumber;
    return getAssetRegistry('org.qt.blockchain.hyperleder.samples.Bike')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(registrationNumber);
        })
        .then(function(asset) {
            asset.owner = sellVehicle.buyer;
            return assetRegistry.update(asset);
        });
}