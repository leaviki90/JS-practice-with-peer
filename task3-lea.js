let even = [];
let odd = [];
function processData(someString) {
    const stringArr = someString.split("");
    for (let x = 0; x < stringArr.length; x++) { 
        if (x % 2 === 0) {
            even.push(stringArr[x]);
        } else {
            odd.push(stringArr[x]);
        }
    }
    console.log(even.join("") + "  " + odd.join("")); 
}

processData("Hacker");