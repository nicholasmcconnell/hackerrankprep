var test = "my number is 2";
function sumNumbers(test) {
    var textArr = test.split(' ');
    var count = 0;
    console.log(textArr);
    for (var i = 0; i < textArr.length; i++) {
        if (Number(textArr[i])) {
            count += Number(textArr[i]);
        }
    }
    return count;
}
console.log(sumNumbers(test));
