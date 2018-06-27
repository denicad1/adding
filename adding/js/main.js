//will add every number from 0 to the argument intger
function addingNum(num) {
    //variable to hold the total number
    var tempnum = 0;
    //loop to include every number from 0 to the argument integer
    for (var i = 0; i <= num; i++) {
        //adds the value of i to tempnum
        tempnum += i;
    }
    //logs variable tempnum
    console.log(tempnum);
};
addingNum(12);
