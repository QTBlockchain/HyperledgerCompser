
  ______   ______   .___  ___. .______     ______        _______. _______ .______           ______  __       __  
 /      | /  __  \  |   \/   | |   _  \   /  __  \      /       ||   ____||   _  \         /      ||  |     |  | 
|  ,----'|  |  |  | |  \  /  | |  |_)  | |  |  |  |    |   (----`|  |__   |  |_)  |       |  ,----'|  |     |  | 
|  |     |  |  |  | |  |\/|  | |   ___/  |  |  |  |     \   \    |   __|  |      /        |  |     |  |     |  | 
|  `----.|  `--'  | |  |  |  | |  |      |  `--'  | .----)   |   |  |____ |  |\  \----.   |  `----.|  `----.|  | 
 \______| \______/  |__|  |__| | _|       \______/  |_______/    |_______|| _| `._____|    \______||_______||__| 
                                                                                                                 

# Create the archive
composer archive create  --sourceType dir --sourceName ../

# deploy the network
composer network deploy -a ./qt-study-network@0.0.1.bna -c PeerAdmin@hlfv1 -A admin -S adminpw


# Add a new participant
https://hyperledger.github.io/composer/managing/participant-add.html