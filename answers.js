// I will put all answers here
//Write a function that takes a string and returns the first character of the string. Test your function on a few inputs, including the empty string.
function firstChar(string) {  
    return string.substring(0,1);
};
console.log(firstChar("Love"));

//Write a function that takes a string and returns the last character of a string. Test your function on a few inputs, including the empty string.



function lastChar(word) {
    var lastStringCharat = (word.length -1);
    return word[lastStringCharat];
};

console.log(lastChar("What"));
/////Write a function that takes a string and a number, and returns the character at the position represented by the number. The indexing of number should start at 0. Test your function on a few inputs, including the empty string.
function stringNumb(number, string) {
   return  string.charAt(number);
};

console.log(stringNumb(5,"you'rejj"));
//Write a function that takes two numbers and adds them together. Test your function on a few inputs. Write in the comments what happens when you pass something other than a number to your function.
function addNumb(numb1, numb2){
   return numb1 + numb2;
};
console.log(addNumb(5,4));
// itll put everything into one string 
//Write a function that takes two numbers and multiplies them together. Test your function on a few inputs. Write in your comments what happens when you pass something other than a number to your function.
function multiPly(num1, num2){
    return num1 * num2;
};

console.log(multiPly(5,9));
//shows that its not a number (NaN)
//Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers. If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product. If the string is ‘div’, return the ratio. Otherwise return 0.
function spitOut(no1, no2, theword){
    if (theword === "add") { 
        return no1 + no2
    } 
    
    else if (theword === "subtract" ){
        return no1 - no2
        
    } 
        else if (theword === "mult") {
            return no1 * no2
} else if (theword === "div"){
    return no1 % no2}
    else {return 0}
};

console.log(spitOut(5,8,"mult"));
//Write a function that takes a string and a number, and returns the string repeated that many number of times. Test your function with various inputs.

function lotsOfWords(phrase, numberof) {
    var i = 0;
    while(i < numberof) {
        console.log(phrase);
        i++;
    };
}

lotsOfWords("you!", 8);
//Write a function that takes a string, and returns the reverse of that string. For example, if you pass the function the string “hello”, it should return “olleh”. Test your function on a few inputs, including the empty string.
function reverse(stringz) {
  var empty = '';
  for (var i = stringz.length - 1; i >= 0; i--) // we -1 to subtract the extra length we -- so it counts backwayrds
    empty = empty +  stringz[i]; // adding 
  return empty;
}
console.log(reverse("Yo"));

//Write a function that takes a number and returns the factorial of a number. The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.
function factorial(numba) {
    if (numba === 0) { 
        return 1;
    }
    if (numba< 0) { 
        return undefined;
    }
    
    for (var i = numba-1 ; i > 0; i--) {
        numba *= i; 
};

 return numba;

}

console.log(factorial(5))


//Write a function that takes a phrase as a string, and returns the longest word in that phrase. If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.
 function longWord(striing) {
     var chunks = striing.split(" ");
     var longestWord = '';
     
     for (var i = 0; i < chunks.length; i++ ) {
            if(chunks[i].length > longestWord.length) {
                longestWord = chunks[i];
            }
     }
     return longestWord;
 };
 
 console.log(longWord("Yo man how is it going!"))
 
 var j = {
     age: 20,
     name: 'Julian'
 }



//Write a function that takes a phrase, and returns the same phrase with every word capitalized. For example, if you pass your function "hello world", it should return "Hello World" and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return "Hello World". Test your function of a few inputs.
function capitalWord(phraze) {
var chopped = phraze.split(" ");
var newArr = [];
    for (var i = 0; i < chopped.length; i++) {
        var capWord = chopped[i].charAt(0).toUpperCase() + chopped[i].substring(1).toLowerCase();
        
        newArr.push(capWord);
    }
    return newArr.join(" ");

}

console.log(capitalWord("Hey hoWs it GoIng"))

//Write a function that takes an array and returns the largest number of the array. Test your function on a few inputs.
function bigArray(largestNumb) {
    var bigNumb = 0;
    
    for (var i = 0 ; i < largestNumb.length; i++ ) {
        if (largestNumb[i] > bigNumb) {
            bigNumb = largestNumb[i]
        } 
  };
   return bigNumb;
};



console.log(bigArray([1,7,8,10,14,16,5]))

//Write a function that takes an array, and returns a filtered array. The filtered array should only contain the truthy values from the initial array. Hint: there is an array method called filter that can help you with this :)
function filterArray(filtered) { 
    var newestArray = filtered.filter(function(ele) {
        if(ele) {
            return ele;
        }
    })
    return newestArray;
}
    console.log(filterArray ([5,8,0,NaN,false]))
    
    //Write a function that takes an array of numbers, and returns the sum of all the numbers in the array.
    function arraySum(arri) {
       var count = 0
      for (var i = 0; i < arri.length; i++) {
       count = count + arri[i];
    };
      return count;
    }
    
console.log(arraySum([5,9,8]))
//Write a function that takes two arrays, and returns an array of all elements that are only in one array. For example, with [1,2,3] and [1,2,4,5] the function should return [3,4,5]. Test your function on different inputs. Hint: you should look up array methods indexOf and slice.
