//실습1
document.write("Hello,world!");
document.write("<h1>Welcome to JS Program</h1>");
document.write("<h2>Welcome to JS Program</h2>");
document.write("<h3>Welcome to JS Program</h3>");

console.log('Welcome JS Program');
console.info('Welcome JS Program');
console.warn('Welcome JS Program');
console.error('Welcome JS Program');

alert('Welcome JS Program');
var a = prompt('Welcome JS Program');
console.log(a);

//실습2
console.log(123, typeof 123);
console.log(123.5, typeof 123.5);
console.log("123", typeof "123");
console.log(true, typeof true);
console.log(false, typeof false);

//실습3
var car;
console.log(car);
var car = "";
console.log(typeof car);

var person = {firstName: "John", LastName: "Doe", age: 50, eyeColor: "blue"};
console.log(typeof person);
person = null;
console.log(typeof person);

//실습4
var name = "이승훈";
var age = 29;
var cgpa = 3.92;
var lineBreak = "<br/>";

document.write("이름: " + name + lineBreak);
document.write("나이: " + age + lineBreak);
document.write("학점: " + cgpa + lineBreak);

//실습5 (문자열 연결)
var lastName = "홍";
var firstName = "길동";

var fullName = lastName + firstName;

console.log(fullName);
console.log("Today is" + " a " + "beautiful day");
console.log("My name is " + fullName);

var num1 = 20;
var num2 = 30;
var sum = num1 + num2;
console.log(num1 + " + " + num2 + " = " + sum);

//실습6
var text = prompt("Enter your name:");
document.write("Your name : " + text + "<br/>");

var len = text.length;
document.write("Number of characters : " + len + "<br/>");

document.write(text.charAt(2) + "<br/>");
document.write(text.toUpperCase() + "<br/>");
document.write(text.toLowerCase() + "<br/>");

var text1 = "hi, ";
var text2 = "bye";
var text3 = text1.concat(text2);
document.write(text3 + "<br/>");

var text4 = "hello";
var result = text4.slice(1,2);
document.write(result + "<br/>");

//실습7
var num = "20";
console.log(typeof num);
num = num.toString();
console.log(typeof num);

var number = 20;
console.log(typeof number);

number = number.toString();
console.log(number, typeof number);

var x = 2.56789;
console.log(x.toFixed(1), typeof x.toFixed(1));
console.log(x.toFixed(2));
console.log(x.toFixed(3));

console.log(x.toPrecision(1), typeof x.toPrecision(1));
console.log(x.toPrecision(2));

console.log(Number(true));
console.log(Number(false));
console.log(Number(" 10"));
console.log(Number(" 10 "))
console.log(Number("10.25"))

//실습8
var input1 = prompt("Enter first number : ");
var num1 = parseInt(input1);

var num2 = parseInt(prompt("Enter second number : "));
var lineBreak = "<br/>";

var result = num1 + num2;
document.write("the sum is : " + result + lineBreak);

var result = num1 - num2;
document.write("the sub is : " + result + lineBreak);

var result = num1 * num2;
document.write("the multiplication is : " + result + lineBreak);

var result = num1 / num2;
document.write("the division is : " + result + lineBreak);

var result = num1 % num2;
document.write("the remainder is : " + result + lineBreak);

//실습9
var base = parseFloat(prompt("밑변 입력 : "));
var height = parseFloat(prompt("높이 입력 : "));

var area = base * height * 0.5;
document.write("삼각형의 넓이 : " + area);

var input1 = prompt("Enter first number : ");
var num1 = parseInt(input1);

//실습10
var cels = parseFloat(prompt("섭씨 입력 : "));
var farn = cels * (9 / 5) + 32;

document.write("화씨 : " + farn);

20230531
실습1
var num1 = 20;
var num2 = 10;
var num3 = "10";
var num4 = 20;
var num5 = 15;

console.log('일반 크기비교');
console.log(num1 > num2, num1, '>', num2);
console.log(num1 >= num2, num1, '>=', num2);
console.log(num1 < num2, num1, '<', num2);
console.log(num1 <= num2, num1, '<=', num2);

console.log('같은지 여부 확인');
console.log(num1 == num4, num1, '==', num4);
console.log(num1 != num4, num1, '!=', num4);

console.log('===');
console.log(num1 === num3, num1, '===', num3);
console.log(num2 === num3, num2, '===', num3);
console.log(num2 == num3, num2, '==', num3);

console.log('num1 > num2 && num1 < num5 : ', num1 > num2 && num1 < num5);
console.log('num1 > num2 && num1 < num5 : ', num1 > num2 && !(num1 < num5));
console.log('num1 > num2 || num1 < num5 : ', num1 > num2 || num1 < num5);

//실습2
var num1 = parseInt(prompt('첫번째 숫자 입력 : '));
var num2 = parseInt(prompt('두번째 숫자 입력 : '));

if(num1 > num2) {
    console.log("큰 수는 num1 : " + num1);
}

if(num1 < num2) {
    console.log("큰 수는 num2 : " + num2);
}

if(num1 == num2) {
    console.log("같은 수");
}

if(num1 > num2) {
    console.log("큰 수 num1 : " + num1);
} else if (num1 < num2) {
    console.log("큰 수 num2 : " + num2);
} else if (num1 == num2) {
    console.log("같은 수");
}

if(num1 > num2) {
    console.log("큰 수 num1 : " + num1);
} else if (num1 < num2) {
    console.log("큰 수 num2 : " + num2);
} else {
    console.log("같은 수");
}

//실습3
var letter = prompt("Enter a letter : ");

letter = letter.toLowerCase();

if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
    console.log('Vowel');
} else {
    console.log('Consonant');
}

//실습4 숫자의 영어 표기 출력
var digit = parseInt(prompt("숫자 입력 : "));

switch(digit) {
    case 0:
        document.write("Zero");
        break;
    case 1:
        document.write("One");
        break;
    case 2:
        document.write("Two");
        break;
    case 3:
        document.write("Three");
        break;
    case 4:
        document.write("Four");
        break;
    case 5:
        document.write("Five");
        break;
    case 6:
        document.write("Six");
        break;
    case 7:
        document.write("Seven");
        break;
    case 8:
        document.write("Eight");
        break;
    case 9:
        document.write("Nine");
        break;
    default:
        document.write("Not a digit");
        break;
}

//실습5 do-while 루프 이해하기
var i = 1;

do {
    document.write("묜 : " + i++ + "<br/>");
} while (i < 1)
    document.write("===========<br/>");

var j = 1;
j = j + 3;
while(j < 1) {
    document.write("묜 : " + j++ + "<br/>")
}

//실습6 break와 continue이해하기

for (var i = 1; i <= 100; i++) {
    if(i == 20){
        break;
    }
    document.write(i + "<br/>")
}

for (var k = 1; k <= 100; k++) {
    if(k == 20){
        continue;
    }
    document.write(k + "<br/>")
}

//실습7
//매개변수가 없는 함수 생성하기
function message() {
    document.write("Hello, I am function without parameter" + "<br/>");
}

//한 개의 매개변수를 가진 함수 생성하기
function welcomeMessage(name) {
    document.write("welcome " + name + "<br/>");
}

function addition(num1, num2) {
    var sum = num1 + num2;
    document.write("addition is " + sum + "<br/>");
}

//값을 반환하는 함수 생성하기
function square(num) {
    return num * num;
}

message();
welcomeMessage("전미현");
addition(2, 3);
document.write("square of 5 is " + square(5) + "<br/>");

//실습8
//신규 IIFE 예제
(function display(message) {
    console.log(message);
})("hi");

var display2 = function displayMessage(msg) {
    console.log(msg);
}
display2("I am message");

(function addNumber(a, b) {
    console.log(a+b);
})(5,7)

//실습9
//배열 생성하기
var names = new Array(20);

names[0] = "미현";
names[1] = "민성";

console.log(names[1]);

//값을 가진 배열 생성하기
var students = ["지훈","은영","수진","준호"];
console.log("students : " + students);
console.log("2번 인덱스의 학생 : " + students[2]);

//배열의 길이 찾기
console.log("학생 배열 길이 : ", students.length);

//배열의 요소 추가하기
students.push("미현");
console.log("push 후 학생 배열 : " + students);

//배열의 요소 삭제하기
students.pop(); //pop은 그냥 맨 뒤에있는거 하나 뺀다.
console.log("pop 후 학생 배열 : " + students);
students.pop(); //하나 더 빼보기
console.log("pop 한번 더 학생 배열 : " + students);

//배열 연결하기
var numArray1 = [10, 20];
var numArray2 = [30, 40, 50, 60];
var numArray = numArray1.concat(numArray2);

console.log("배열잇기(concatenation) : " + numArray);
console.log(numArray1 + numArray2);

//실습10

var date = new Date();
console.log(date);

//년도 정보 얻기
var year = date.getFullYear();
console.log(year);

//월 정보 얻기
var month = date.getMonth();
console.log(month);

//날짜 정보 얻기
var currentDate = date.getDate();
console.log(currentDate);

//요일 정보 얻기
var currentDay = date.getDay();
console.log(currentDay);

//시간 정보 얻기
var currentHour = date.getHours();
console.log(currentHour);

//분 정보 얻기
var currentMinutes = date.getMinutes();
console.log(currentMinutes);

console.log('getTime : ', date.getTime())