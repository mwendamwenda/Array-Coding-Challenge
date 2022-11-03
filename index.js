// // console.log('mwenda all will be well');

// const calcTip = function(bill){
//     return bill>= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;//ternery value
// }
// //we can also do it using arrow function

// const calcTip2 = bill => bill>= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const bills = [125,555,44];
// const tips = [calcTip2(bills[0]),calcTip2(bills[1]),calcTip2(bills[2])];
// console.log(bills,tips);

// const totals = [bills[0] + tips[0],bills[0] + tips[0],bills[1] + tips[2]];
// console.log(totals);

const calcTip3 = function(bill){
    if(bill){
       bill  >= 50 && bill <= 300;
       console.log(bill * 0.15);
    }else{
        console.log(bill * 0.20);
    }
}

const bills = [125,555,44];
const tips  =[calcTip3(bills[0]),calcTip3(bills[1]),calcTip3(bills[2])];

const totals = [tips[0]+bills[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(totals);