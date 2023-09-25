// Chapter 21 (Changing Case)
// =============================

// Q1: 

// var allLower = userInput.toLowerCase();

// Q2:

// var x = "Rabi Faraz Abbasi".toLowerCase();
// alert(x);

// Q3:

// var y = "Rabi Faraz Abbasi".toUpperCase();
// alert(y);

// Q4:

// var firstVar = "Rabi Faraz Abbasi";
// var SecondtVar = firstVar.toLowerCase();
// alert(SecondtVar);

// Q5:

// var myArr = ["Rabi" , "Faraz" , "Abbasi"];
// var newVar = myArr[0].toLowerCase();
// alert(newVar);

// Q6:

// var y = "rabi faraz abbasi".toUpperCase();
// alert(y);

// Q7:

// var cityName = "kaRacHi";
// var firstChar = cityName.slice(0,1).toUpperCase();
// var remainingChar = cityName.slice(1).toLowerCase();
// alert(firstChar+remainingChar);


// Chapter 22 - 25 (Strings)
// =============================

// Q1:

// var sameWords = "captain";
// var extract = sameWords.slice(1,3);
// alert(extract);

// Q2:

// var text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam labore necessitatibus."
// var wordCount = text.length;
// alert(wordCount);

// Q3:

// var animal = "elephant";
// var extractAlphabets = animal.slice(2,6);
// alert(extractAlphabets);

// Q4:

// var fullName = "Rabi Faraz Abbasi";
// var length = fullName.length;
// alert(length);

// Q5:

// var mystring = "Aeroplane";
// var length = mystring.length;
// var newStr = mystring.slice(1,6);
// alert(newStr);

// Q6:

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
// Answer is 3.

// Q7:

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Answer is 16.

// Q8:

// var text = "If you want to go then lets go now.";
// var indx = text.lastIndexOf("go");

// Q9:

// if(indexNum[3] === true){}

// Q10:

// var text = "abcd";
// var finding =  text.charAt(2);
// alert(finding);

// Q11:

// var text = "abcdefghijklmnopqrstuvwxyz";
// var cha =  text.charAt(9);
// alert(cha);

// Q12:

// var str = "abcdefghijklmnopqrstuvwxyz";
// var x =  str.charAt(str.length -1);
// alert(x);

// Q13:

// var input = "abcdefghijklmnopqrstuvwxyz";
// var cha =  input.charAt(4);
// alert(cha);

// Q14:

// var str = "abcdefghijklmnopqrstuvwxyz";
// if (str.charAt(2) === "c"){
//     alert("Match Found");
// }else{
//     alert("No Match");
// }

// Q15:

// var str = "abcdefghijklmnopqrstuvwxyz";
// var myArr = [];
// for (i=0; i<str.length; i++){
//     myArr[i] = str.charAt(i);
// }
// document.write(myArr.join(" "));

// Q16:

// var str = "0345-66131190";
// document.write("Original String: " + str);
// var newStr = "";
// var flag = false;

// for (var i = 0; i < str.length; i++) {
//     if (str[i] === "1" && !flag) {
//         newStr += "one";
//         flag = true;
//     } else {
//         newStr += str[i];
//     }
// }
// document.write("<br>Modified String: " + newStr);

// Q17:

// var y = x.replaceAll("a", "z");
// or
// var y = x.replace(/a/g, "z");

// example:

// var x = "JavaScript is both compiled and interpreted. In the earlier versions of JavaScript, it used only the interpreter that executed code line by line and shows the result immediately. But with time the performance became an issue as interpretation is quite slow. Therefore, in the newer versions of JavaScript, probably after the V8,";
// document.write(x + "<br><br>");
// var y = x.replace(/JavaScript/g, "JS");
// document.write(y);


// Chapter 26 (Rounding Numbers)
// =============================

// Q1:

// var number = 3.8;
// var roundednumber = Math.round(number);
// alert(roundednumber);

// Q2:

// var origNum = 3.2;
// var roundNum = Math.ceil(origNum);
// alert(roundNum);

// Q3:

// var origNum = 3.9;
// var roundNum = Math.floor(origNum);
// alert(roundNum);

// Q4:

// var number = 3.8;
// var roundednumber = Math.round(number);

// Q5:

// var origNum = 0.5;
// var roundNum = Math.floor(origNum);
// alert(roundNum);



// Chapter 27 (Random Numbers)
// =============================

// Q1:

// var num = (Math.random() * 50) +1;
// var newNum = Math.floor(num);
// alert (newNum);

// Q2:

// var randomNum = Math.random();

// Q3:

// var diceNum = (Math.random() * 6) +1;
// var modifiedNum = Math.floor(diceNum);
// alert (modifiedNum);
// location.reload();

// Q4:

// var userinput = prompt("Please type one\nhead or tail");
// var choice = (Math.random() * 2) +1;
// var modifiedNum = Math.floor(choice);
// if (modifiedNum === 1 && userinput === "head" || modifiedNum === 2 && userinput === "tail"){
//     alert("You Win");
// }else{
//     alert("You Loose");
// }


// Chapter 28, 29 (Converting Strings)
// =============================

// Q1 & Q2:

// var str = parseInt("123");
// alert(typeof(str) + " " + str);

// Q3:

// var str = Number("12.23232323");
// alert(str);

// Q4:

// by using parseInt

// Q5:

// var num = 12.23232323;
// num = num.toString();
// alert(typeof(num));

// Q6:

// var num = 42;
// num = num.toString();
// alert(typeof(num) + " " + num);

// Q7:

// var str = "22.2323896559";
// num = parseFloat(str);
// alert(typeof(num) + " " + num);


// Chapter 30 (Controlling the length of decimals)
// ================================================


// Q1:

// var num = 22.2323896559;
// var newNum = num.toFixed(4);
// alert(newNum);

// Q2:

// var num = 22.2323896559;
// num = Number(num.toFixed(2).toString());
// alert(typeof(num) + " " + num);

// Q3:

// var num = 22.2323896559;
// var str = num.toString();
// if(str.length === 5 && typeof(str) === "string"){
//     alert("Match");
// }else{
//     alert("Not Match");
// }

// Q4:

var num = Math.random() * 5;
alert("Original number\n" + num);
num = num.toFixed(num).toString();
alert("Modified number and Data type\n" + num + " " + typeof(num));