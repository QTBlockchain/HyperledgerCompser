'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.qt.hyperledger.samples.election.ChangeAssetValue} changeAssetValue
 * @transaction

function onChangeAssetValue(changeAssetValue) {
    var assetRegistry;
    var id = changeAssetValue.relatedAsset.assetId;
    return getAssetRegistry('org.qt.hyperledger.samples.election.SampleAsset')
        .then(function(ar) {
            assetRegistry = ar;
            return assetRegistry.get(id);
        })
        .then(function(asset) {
            asset.value = changeAssetValue.newValue;
            return assetRegistry.update(asset);
        });
}
 */