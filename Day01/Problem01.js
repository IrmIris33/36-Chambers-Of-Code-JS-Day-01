class Problem {
    /**
 * Have the wordCount(input) take the str string parameter being passed
 * and return the number of words the string contains
 * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
 * separated by single spaces.
 */

    // Step 1: Identify variable and use split method to separate words in the string
    // Step 2: Return the length of the string

    wordCount(input) {
        let count = input.split(" ");
        return count.length;
    }

/**
 * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
 letter of each word. Words will be separated by only one space.
* 
*/

    // Step 1: Identify a variable and use split method to seperate the string
    // Step 2: Create a for loop to loop each object in the string
    // Step 3: Create a new variable and assign new string, capitalizing the first letter of the string and using a substring
    // Step 4: Return new string
    letterCapitalize(str) {
    let strSplit= str.split(" ");
        for(let i = 0; i < strSplit.length; i++){
            let word = strSplit[i];
            strSplit[i] = word[0].toUpperCase() + word.substring(1);
        }
        return strSplit.join(" ");
    }

/**
 * Have the function firstReverse(String input) take the input parameter being passed and
 * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
 * program should return the string sredoC dna dlroW olleH.
 */

    firstReverse(input){
        // Step 1: create an empty string to store result for for loop
        let result = '';
        
        // Step 2: for loop to reverse the string
        for(let i = input.length - 1; i >= 0; i--){
            result += input[i];
        }
        // Step 3: return result of reversed string
        return result;
    }

/**
 * Have the longestWord(String input) take the input parameter being passed and return the
 * largest word in the string. If there are two or more words that are the same length,
 * return the first word from the string with that length. Ignore punctuation and assume
 * input will not be empty.
 */
  
    longestWord(input) {
    // Step 1: Identify an empty variable and use split method to separate the string   
        let str = input.split(" ");

    // Step 2: Create empty variables for the longest and null to store the new string 
        let longest = 0;
        let word = null;

    // Step 3: Use the for loop to loop through objects in the string           
        for (let i = 0; i < str.length; i++) {

    // Step 4: Create empty new variable to store letters
        let checkedLetters = "";

    // Step 5: Use if statement to identify the alpha
        for (let j = 0; j < str[i].length; j++) {
            if (/[a-zA-Z]/.test(str[i][j])) {
                checkedLetters += str[i][j];
            }
        }
    // Step 6: Use if statement to identify the longest  
        if (longest < checkedLetters.length) {
                longest = checkedLetters.length;
                word = checkedLetters;
            }
        }
    // Step 5: Return the new string   
        return word;
    }

/**
 * Have the swapCase(String input) take the input parameter and swap the case of each
 * character. For example: if str is "Hello World" the output should be hELLO wORLD.
 * Let numbers and symbols stay the way they are.
 */

    swapCase(str) {
    // Step 1: Identify an empty variable    
        let string1 = ""; 

    // Step 2: Use the for loop to loop through the string    
        for (let i = 0; i < str.length; i++) {

    // Step 3: Use if else statement to identify the characters to change casing       
        if (/[A-Z]/.test(str[i])) string1 += str[i].toLowerCase();
            else string1 += str[i].toUpperCase();
        }
    // Step 4: Return string    
        return string1;
    }

}

module.exports = Problem;