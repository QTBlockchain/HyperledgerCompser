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


 //org.qt.hyperledger.samples.election

 /**
 * Sample transaction
 * @param {org.qt.hyperledger.samples.election.StartElection} se
 * @transaction
 **/
function startElection(se) {
    if (se.election.status == "NOTSTARTED") {
        se.election.status = "STARTED";
        return getAssetRegistry('org.qt.hyperledger.samples.election.election')
            .then(function (ar) {
                ar.update(se.election); 
            });
    }
}


/**
 * Sample transaction
 * @param {org.qt.hyperledger.samples.election.StopElection} se
 * @transaction
 **/
function stopElection(se) {
    if (se.election.status == "STARTED") {
        se.election.status = "COMPLETED";

        return getAssetRegistry('org.qt.hyperledger.samples.election.election')
            .then(function (ar) {
                ar.update(se.election); 
            });
    }
}


/**
 * This function will perform business logic for voting
 * @param {org.qt.hyperledger.samples.election.vote} v
 * @transaction
 **/
function vote(v) {
    
}