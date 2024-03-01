function reverseString(string) {
    var splitString = string.split("");
    var revString = splitString.reverse();
    var combineString = revString.join("");
    console.log(combineString);
}
reverseString("hello my name is");

function circumference(diam) {
    var c = 2 * Math.PI * diam / 2;
    console.log (`a circle with radius ${diam} has a circumference of ${c}`)
}
circumference(10);

function prime(num) {
    let check;
    let primeState = "prime";
    for (let i = num - 1; i > 1; i--) {
        check = num % i;
        if (check == 0) {
            primeState = "not prime";
        }
    }
    console.log(`${num} is ${primeState} `);
}
prime(27);

function leapYear(year){
    const dateCheck=new Date(year,1,29).getDate();
    if (dateCheck===29){
        console.log(`${year} is a leap year`);
    }
    else {
        console.log(`${year} is not a leap year`)
    }
}
leapYear(2024);

function palindrome(string){
    var firstHalf=string.slice(0,string.length/2+1);
    var secondHalf=string.slice(string.length/2,string.length);
    var splitString = secondHalf.split("");
    var revString = splitString.reverse();
    var reversedHalf = revString.join("");
    if(firstHalf===reversedHalf){
        console.log(`${string} is a palindrome`);
    } else{
        console.log(`${string} is not a palindrome`);
    }
}

palindrome('racecar');