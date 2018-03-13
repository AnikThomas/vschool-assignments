var printEachLetter = function(str){
    for (i = 0; i < str.length; i++){
        console.log(str[i]);
    }
};

var printPosition = function(str,character){
    for (i = 0; i < str.length; i++){
        if(character === str[i]){
            console.log(i);
            return;
        }
    }

    console.log("I cant find it");
};

var findNumber42 = function(arrayNumber){
    for (i = 0; i < arrayNumber.length; i++){
        if(42 === arrayNumber[i]){
            return;
        }
    }

    console.log("I cant find 42");
};

var findSmallNumber = function(arrayNumber){
    var smallest = arrayNumber[0];
    for (i = 0; i < 10; i++){
       if (arrayNumber[i]< smallest){
           smallest = arrayNumber[i];
       }
    }
    console.log(smallest);
};


