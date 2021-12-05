/**
 * 
 */
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(`exercise 0:\n${result}`);

/* You can search for multiple patterns using the alternation or OR operator: |. */
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result1 = petRegex.test(petString);
console.log(`exercise 1:\n${result1}`);

// the i flag -- ignores case
let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result2 = fccRegex.test(myString1);
console.log(`exercise 2:\n${result2}`);


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result3 = extractStr.match(codingRegex);
console.log(`exercise 3:\n${result3}`);

//g - all global
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result4 = twinkleStar.match(starRegex);
console.log(`exercise 4:\n${result4}`);

//. - wildcard
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result5 = unRegex.test(exampleStr);
console.log(`exercise 5:\n${result5}`);

// [] to match specific characters
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result6 = quoteSample.match(vowelRegex);
console.log(`exercise 6:\n${result6}`);

// Inside a character set, you can define a range of characters to 
//match using a hyphen character: -
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result7 = quoteSample1.match(alphabetRegex);
console.log(`exercise 7:\n${result7}`);

/*Create a single regex that matches a range of letters
 between h and s, and a range of numbers between 2 and 6*/
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi;
let result8 = quoteSample2.match(myRegex1);
console.log(`exercise 8:\n${result8}`);

//Create a single regex that matches all characters that are not a number or a vowel.
let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^0-9aeiou]/gi;
let result9 = quoteSample3.match(myRegex2);
console.log(`exercise 9:\n${result9}`);

//match a character (or group of characters) that appears one or more times in a row. 
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g;
let result10 = difficultSpelling.match(myRegex3);
console.log(`exercise 10:\n${result10}`);

// * is an option that matches characters that occur zero or more times.
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result11 = chewieQuote.match(chewieRegex);
console.log(`exercise 11:\n${result11}`);

//you can use the ? character to change it to lazy matching.
let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/;
let result12 = text.match(myRegex4);
console.log(`exercise 12:\n${result12}`);

//Outside of a character set, the caret is used to search 
//for patterns at the beginning of strings.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result13 = calRegex.test(rickyAndCal);
console.log(`exercise 13:\n${result13}`);

/* search the end of strings using the dollar 
sign character $ at the end of the regex.*/
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result14 = lastRegex.test(caboose);
console.log(`exercise 14:\n${result14}`);

// \w This shortcut is equal to [A-Za-z0-9_]
let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result15 = quoteSample4.match(alphabetRegexV2).length;
console.log(`exercise 15:\n${result15}`);

/* \W. Note, the opposite pattern uses a capital letter. This shortcut 
is the same as [^A-Za-z0-9_].*/
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result16 = quoteSample5.match(nonAlphabetRegex).length;
console.log(`exercise 16:\n${result16}`);

/* Use the shorthand character class \d to count how many digits are in movie titles.*/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result17 = movieName.match(numRegex).length;
console.log(`exercise 17:\n${result17}`);

/**Use the shorthand character class for non-digits
 \D to count how many non-digits are in movie titles. */
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result18 = movieName1.match(noNumRegex).length;
console.log(`exercise 18:\n${result18}`);

/**Usernames can only use alpha-numeric characters.
The only numbers in the username have to be at the end. 
There can be zero or more of them at the end. 
Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. 
A two-character username can only use alphabet letters as characters. */

//let username = "JackOfAllTrades";
//let username = "Jack";
//let username = "J";
//let username = "Jo";
//let username = "Oceans11";
let username = "007";
//let username = "9";
//let username = "A1";
//let username = "BadUs3rnam3";
//let username = "AB1";
//let username = "c57bT3";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result19 = userCheck.test(username);
console.log(`exercise 19:\n${result19}`);

//searching for whitespace using \s or non whitespace \S
let sample = "Whitespace is important in separating words";
//let countWhiteSpace = /\s/g; 
let countWhiteSpace = /\S/g;
let result20 = sample.match(countWhiteSpace);
console.log(`exercise 20:\n${result20}`);
console.log(result20);

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result21 = ohRegex.test(ohStr);
console.log(`exercise 21:\n${result21}`);

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result22 = haRegex.test(haStr);
console.log(`exercise 22:\n${result22}`);

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result23 = timRegex.test(timStr);
console.log(`exercise 23:\n${result23}`);

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result24 = favRegex.test(favWord);
console.log(`exercise 24:\n${result24}`);

/**Use lookaheads in the pwRegex to match passwords 
that are greater than 5 characters long,
 and have two consecutive digits. 
** Remember that Lookahead groups require you to 
think from the beginning of the string again*/
let sampleWord = "astronaut";
//let sampleWord = "banan1";
//let sampleWord = "bana12";
//let sampleWord = "12345";
//let sampleWord = "astr1on11aut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Change this line
let result25 = pwRegex.test(sampleWord);
console.log(`exercise 25:\n${result25}`);

/**check for groups of characters using a 
Regular Expression and to achieve that we use parentheses () */
//let myString2 = "Eleanor Roosevelt";
let myString2 = "Franklin D. Roosevelt";
let myRegex5 = /(Franklin|Eleanor)\D*Roosevelt/; // Change this line
let result26 = myRegex5.test(myString2); // Change this line
console.log(`exercise 26:\n${result26}`);
// After passing the challenge experiment with myString and see how the grouping works

/**if you don't know the specific word repeated 
Capture groups can be used to find repeated substrings.
Capture groups are constructed by enclosing the 
regex pattern to be captured in parentheses
The substring matched by the group is saved to a temporary "variable",
 which can be accessed within the same regex using a backslash and the 
number of the capture group (e.g. \1). Capture groups are automatically 
numbered by the position of their opening parentheses (left to right), starting at 1. */
let repeatNum = "42 42 42";
//let repeatNum = "42 42 42 42";
//let repeatNum = "1 2";
let reRegex = /^(\d+)(\s)\1\2\1$/; // Change this line
let result27 = reRegex.test(repeatNum);
let result28 = repeatNum.match(reRegex);
console.log(`exercise 27:\n${result27}`);
console.log(result28);

/**You can search and replace text in a string using .replace() on a string.
 The inputs for .replace() is first the regex pattern you want to search for.
 The second parameter is the string to replace the match or a function to do something.
You can also access capture groups in the replacement string with dollar signs ($) */
let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result29 = str.replace(fixRegex, replaceText);
console.log(`exercise 29:\n${result29}`);

/* remove whitespace from start and end -- remember the regular expression, wsRegex
matches the string needing to be replaced.. then the match is replaced by "" nothing else --
the g global can make multiple matches which is why the | or works here*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // best solution
let result30 = hello.replace(wsRegex, ""); 
console.log(`exercise 30:\n${result30}`);


