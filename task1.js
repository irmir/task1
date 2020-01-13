/**
 * Returns the rectagle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    var r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
}

const rect1 = new Rectangle(5, 10);
console.log(rect1.getArea());
console.log(rect1.width);
console.log(rect1.height);

/**
 * Returns the n last items of the specified arrays
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
function getTail(arr, n) {
    return arr.slice(-n);
}

console.log(getTail([1, 2, 3, 4, 5, 6, 8, 9], 3));
console.log(getTail([1, 3, 4, 5], 2));

/**
 * Inserts the item into specified array at specified index
 *
 * @param {array} arr
 * @param {any} item
 * @param {number} index
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 0, 'x'  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
}

console.log(insertItem([1, 3, 4, 5], 2, 1));
console.log(insertItem([1, 'b', 'c'], 'x', 0));

/**
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []
 */
function getArrayOfPositives(arr) {
    let arrPositive = arr.filter(function(item){
        return item > 0;
    });
    console.log(arrPositive);
}

getArrayOfPositives([0, 1, 2, -3, 4, 5]);
getArrayOfPositives([-1, 2, -5, -4, 0]);

/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
    // let arrDistinct = arr.filter(item => !arrDistinct.includes(item));

    // let arrDistinct = arr.filter(function(item){
    //     return !arrDistinct.includes(item);
    // });
    // console.log(arrDistinct);

    let arrDistinct = [];

    arr.forEach(function (item) {
        if (arrDistinct.length === 0) {
            arrDistinct.push(item);
        };
        if (!arrDistinct.includes(item)) {
            arrDistinct.push(item);
        };
    });
    return arrDistinct;
}

distinct(['a', 'a', 'a', 'a']);
distinct([1, 1, 2, 2, 3, 3, 4, 4]);

