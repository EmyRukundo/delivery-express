//JavaScript framework

renderer.onInitialLoadingFinished(function () {

   // Show Loading panel before expanding
    renderer.showLoadingPanel();

    //Get account name of a current user

    renderer.dataProvider.getCurrentuserAccountName(function(accountName){

        // Get an object with data of the current user

        renderer.dataProvider.getBoxGroupItemDataById(accountName, function(dataItem){
            // If the current user has somebody above him (as a manger)
            (dataItem.ParentId !="") {
                //Drill down to the manger
            renderer.drillDown(dataItem.ParentId);
            }
        });
    });
    renderer.dataProvider.getCurrentUserAccountName(function (accountName){
        renderer.dataProvider.getBoxGroupItemDataById(accountName, function(dataItem){
            renderer.expandNodeLevelsConditionally(
                //Expand 3 node: the one of the manager at the top, of the current user and of subordinates of the currrent user
                3,
                function(itemData){
                    //Expand node if it is the current user or it has the current user a  manager or it is the manager of the current user
                    return itemData.accountName == dataItem.Id || ItemData.Manger == dataItem.Id || itemData.AccountName == dataItem.ParentId; 
                },
                function (){
                    // Hide Loading panel after expanding 
                    renderer.hideLoadingPanel();
                }

            );
        });
);
