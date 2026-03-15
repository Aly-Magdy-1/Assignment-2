// bonus question
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let num = 1;
    let index = 0;
    let missing_nums = 0;

    while(true){
        if(arr[index] === num){
            index++;
        }
        else{
            missing_nums++;
        }
        if(missing_nums === k){
            return num;
        }
        num++;
    }
};