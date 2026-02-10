let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
alert( fruits.length );

let styles=["jaz", "bluz"];
styles.push("Rock-and-roll");
styles[Math.floor(styles.length-1)/2]="classic";
alert(styles.shift());
styles.unshift("rap", "reggy");

let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2]();

function sumInput() {
    let numbers=[];
    while(true){
        let a=+prompt("val", 0);
        if(a==="" || a===nul || !isFinite(a)) break;
        numbers.push(a);
    }
    let sum=0;
    for(let numger of numbers){
        sum+=numger;
    }
    return(numger);
}

function getMaxSubSum(arr) {
    let maxSum=0;
    for(let i=0; i<arr.length-1; i++){
        let partialMax=0;
        for(let j=0; j<i; j++){
            partialMax+=arr[j];
            maxSum=max(maxSum, partialMax);
        }
    }
    return maxSum;
}