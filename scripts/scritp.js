const numberSqr = prompt("Введите число");
const sqrtNum1 = Math.sqrt(numberSqr);
// console.log(sqrtNum1);
const mass = [];
const res1mass = [];
const boolNumber = Number.isInteger(sqrtNum1);
if (boolNumber === false){
    for (let i = 2; i <= 99; i++){
       mass[i] = i*i;
       //console.log(mass[i]);
    }
    for (let i = 0; i <= mass.length; i++){
        let res1 = numberSqr / mass[i];
        
        
        //console.log(res1);
        if (Number.isInteger(res1) === true){
            res1mass[i] = res1;
            
            let res1max = Math.max(res1mass[i]);
            //console.log(res1max);
            let res2 = numberSqr / res1max;
            console.log(`${Math.sqrt(res2)}√${res1max}`);
            //break;
        }else{
            console.log(sqrtNum1);
        }
    }
}


