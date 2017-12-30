'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.qt.blockchain.hyperledger.diamond.SellDiamond} sellDiamond
 * @transaction
 */
function onSellDiamond(sellDiamond) {
    var assetRegistry;
    var diamondId = sellDiamond.diamond.diamondId;
    return getAssetRegistry('org.qt.blockchain.hyperledger.diamond.Diamond')
        .then(function (ar) {
            assetRegistry = ar;
            console.log(diamondId);
            return assetRegistry.get(diamondId);            
        })
        .then(function (diamond) {
            console.log(diamond);
            diamond.owner = sellDiamond.buyer;
            return assetRegistry.update(diamond);            
        })
    
}