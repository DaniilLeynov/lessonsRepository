const numberSqr = prompt("Введите число");
const sqrtNum1 = Math.sqrt(numberSqr);
// console.log(sqrtNum1);
const mass = [];
const res1mass = [];
const boolNumber = Number.isInteger(sqrtNum1);

    console.log(sqrtNum1);

if (boolNumber === false){
    for (let i = 2; i <= 99; i++){
       mass[i] = i*i;
       
    }
    for (let i = 0; i <= mass.length; i++){
        let res1 = numberSqr / mass[i];
        
        res1mass[i] = res1;
        
        let maxn = Math.max(res1mass[i]);
        //console.log(maxn);
    }
    for (let i = 0; i <= res1mass.length; i++){
        if (Number.isInteger(res1mass[i]) === true){
            
            
            let res1max = Math.max(res1mass[i]);
            //console.log(res1max);
            let res2 = numberSqr / res1max;
            console.log(`${Math.sqrt(res2)}√${res1max}` );
            
            //break;
        }
    }
    //console.log(mass);
    // console.log(res1mass);
}


