COMPOSER - CLI

```
  ______  __       __  
 /      ||  |     |  | 
|  ,----'|  |     |  | 
|  |     |  |     |  | 
|  `----.|  `----.|  | 
 \______||_______||__| 
                       
```
# Create the archive
composer archive create  --sourceType dir --sourceName ../

# deploy the network
composer network deploy -a ./qt-study-network@0.0.1.bna -c PeerAdmin@hlfv1 -A admin -S adminpw


# Add a new participant
https://hyperledger.github.io/composer/managing/participant-add.html

# Issue an identity
composer identity issue -u khaja -a org.qt.hyperledger.samples.diamond.Merchant#khaja -c admin@qtdiamondnetwork -x

# List the identities
composer identity list -c admin@qtdiamondnetwork


# Launch REST Server
composer-rest-server -c admin@qtdiamondnetwork -n always -w true

# Update the app
composer network update -a ./qtdiamondnetwork@0.0.1.bna -c admin@qtdiamondnetwork

# Undeploy
composer network undeploy  -c admin@qtdiamondnetwork 


# Reset
composer network reset -c PeerAdmin@hlfv1

# Ping 
composer network ping -c admin@qtdiamondnetwork