$(document).ready(function(){
    
    //CACHE SELECTOR TO DECREASE LOADTIME
    //var Uonline = $("#Uonline");
    var numOfOnline = 0;
    var count = 0;
    var offset = true;
    var refreshTime = 5000; //Sekunder

    var visitorsOnline = 1;
    var userID;
    $.post("../api/visitor/setVisitor", function(user-id){
       // Uonline.html(getNumOfOnline1); //skriva om domen
        userID = user-id;
    });

    $.post("../api/visitor/updateVisitor/" + userID, function(visitors-online){
        visitorsOnline = visitors-online;
        myNewChart.removeData();
        myNewChart.addData([visitors-online], "");
        myNewChart.update();
    }
                    
    window.setInterval(function(){
        
        /*if(offset) {*/
        $.post("../api/visitor/updateVisitor/" + userID, function(visitors-online){
            visitorsOnline = visitors-online;
            myNewChart.removeData();
            myNewChart.addData([visitors-online], "");
            myNewChart.update();
        });
        /*}
        
        count++;
        
        if(count > 24) {
            offset = false;
            
            if(count%3 == 0)
                offset = true;
            
            if(count > 9000000)
                count = 25;
        }*/
        
    }, refreshTime);
    
});