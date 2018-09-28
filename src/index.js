module.exports = function getZerosCount(number) {

    let countZeros = 0;
    let num = Math.floor(number / 5);

    while(num){
        countZeros += num;
        num = Math.floor(num / 5);
    }
    return countZeros;
}
