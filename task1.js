//Write a JavaScript program to check from
// two given integers whether one of them is 8 or their sum or difference is 8.


function checkTwoIntegers(par1, par2){
    if ((par1 === 8 || par2 === 8) || par1 + par2 == 8){
        console.log("One of integers is 8 or their sum is 8")
    }
    else
        console.log("the condition is not met")
        
}
 
checkTwoIntegers(2, 5)