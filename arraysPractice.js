//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10,20,30];
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item the given array.

  var first = function(someArray){
      return someArray[0];
  }

  first(arr);


//Next problem



var arr = [40,50,60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item the given array.


  var last = function(someArray){
    var last = someArray.length - 1;
    return someArray[last];
  }

  last(arr);

//Next Problem


var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

  var looper = function(someArray){
    for (x in someArray) {
      alert(someArray[x]);
    }
  }

  looper(family);


//Next problem



var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

  var reversedLooper = function(arr){
    var last = arr.length - 1;
    for (var i = last; i >= 0; i--){
      alert(arr[i]);
    }
  }

  reversedLooper(letters);


//Next Problem


var nums = [1,2,3,6,22,98,45,23,22,12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.

  var evenFinder = function(nums){
    for (var i = 0; i < nums.length; i++){
      if (nums[i] % 2 !== 0){
        nums.splice(i,1);
      }
    }
    return nums;
  }

  evenFinder(nums);


//Next problem


var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];
//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) and the second item in the Array being the odds array(all the odd values from nums).



  var divider = function(nums, evens, odds){
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0){
        evens.push(nums[i]);
      } else {
        odds.push(nums[i]);
      }
    }
    var arr = [evens, odds]
    return arr;
  }

  divider(nums, evens, odds);


//Next Problem


var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above you're given a function that will return a random number between 0 and 30, and an array full or numbers. 
//Your job is to write a function named finder that will get a random number, 
//then loop through the array to see if that random number is in the array. If it is, return true, if it's not, return false

  var finder = function(numbers){
    var randNum = getRandomArbitrary();
    for (var i = 0; i < numbers.length; i++){
      if (numbers[i] === randNum){
        console.log(randNum);
        return true;
      } 
    }
    return false;
  }

  finder(numbers);


//Next problem



var str = 'this is my sentence';
//Write a function called reverse that takes is given str as it's only argument and returns that string after it's been reversed

  var reverse = function(str){
    var arr = [];
    for (var i = str.length - 1; i >= 0; i--){
      arr.push(str[i]);
    }
    str = arr.join("");
    return str;
  }

  reverse(str);


//Next Problem


var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list. 
  
  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list. 
  
  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.
*/

  var removeItem = function(list, item){
    for (var i = 0; i < list.length; i++){
      if (list[i] === item){
        list.splice(i,1);
        return list;
      }
    }
  }

  var addItem = function(list, item){
    list.push(item);
    return list;
  }

  removeItem(myGroceryList, 'chips');
  addItem(myGroceryList, 'Jerky');
//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];



//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

  var maker = function(num){
    arr = [];
    for (var i = 0; i <= num; i++){
      arr.push(i);
    }
    return arr;
  }

  maker(215);



//Next Problem


var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

  var addTen = function(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
      newArr.push(Number(arr[i]) + 10);
    }
    return newArr;
  }

  addTen(numbers);



//Next Problem



var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Above is some code that adds a random number to both arr1 and arr2.
//Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.

  var longer = function(arr1, arr2){
    if (arr1.length > arr2.length){
      return arr1;
    } else if (arr2.length > arr1.length) {
      return arr2;
    } else {
      return "they are both the same";
    }
  }

  longer(arr1, arr2);


/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example)
  'both' should return a new array full of numbers that are found in both arr1 and arr2.
*/

  var both = function(arr1, arr2){
    if (arr1.length < arr2.length){
      return arr1;
    } else if (arr2.length < arr1.length) {
      return arr2;
    } else {
      return arr1;
    } 
  }

  var anotherBoth = function(arr1, arr2){
    var arr = [];
    for (var i = 0; i < arr1.length; i++){
      for (var j = 0; j < arr2.length; j++){
        if (arr1[i] === arr2[j]){
          arr.push(arr1[i]);
        }
      }
    }
    return arr;
  }

  both(arr1, arr2);
