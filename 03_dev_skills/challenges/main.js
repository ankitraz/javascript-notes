const temp = [17,21,23];
const temp2 = [12, 5, -5, 0, 4]

function printForecast(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}ºC in ${i+1} ${i+1 > 1 ? 'days' : 'day'}`);
    }
}

printForecast(temp2);