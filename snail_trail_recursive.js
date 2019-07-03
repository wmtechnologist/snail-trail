var color = require('colors');

var snailArray = [];
  
snail = function(array){
  if(array && array.length){
    console.log("array \n", array, array.length);
    //keep track of n
    var n = array.length;
    for(var row = 0; row < n; row++){
       if(row === 0){ 
            //top row, pop all items
            while(array[row].length > 0){
              snailArray.push(array[row].shift());
            }
        } else {
            //subsequent rows, pop last item
            snailArray.push(array[row].pop());
        }
      }
      console.log("SNAIL TRAIL \n", snailArray);
      // recurvise call 
      array = snail(matrix180(array.slice(1)));
  }
  return snailArray;
}

matrix180 = function(array){;
    var rotatedArray = [];
    var len = array.length;
    if(!array || !array.length){
       // array is empty
       console.log("Empty");
       return array.slice(1);
    } else {
        //perform matrix 180 degree rotation
        for(var row = 0; row < len; row++){
            rotatedArray[row] = [];
            for(var col = 0; col < len; col++){
                rotatedArray[row][col] = array[len-row-1][len-col-1];
            }
        }

        console.log("rotated \n", rotatedArray);
        return rotatedArray;
    }
}
console.log( snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));
console.log("Correct [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]");
