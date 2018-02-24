module.exports = function getZerosCount(number) {

    var countZeros = 0;
    var num = Math.floor(number / 5);
    for(;num != 0;){
        countZeros += num;
        num = Math.floor(num / 5);
    }
    return countZeros;
}
