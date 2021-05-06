//Part 1

let remarks;
Temperature = '40';  // Input your temperature in the quotations   

function testCovid() {

    if (Temperature == 33) {
        remarks = 'normal';
    } else if (Temperature > 37) {
        remarks = 'Test for covid';
    }
    else if (Temperature == 35) {
        remarks = 'Watch your temperature';
    }
    return remarks;
}
console.log(testCovid());

//Part 2

let reverseArray;

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].reverse();
//array.reverse();
array[8]='Armstrong';
console.log(array);
console.log(array[2], "is the third element");
