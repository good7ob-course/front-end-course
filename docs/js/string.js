var str = 'The quick brown fox jumps over the lazy dog.';
var words = str.split(' ');
// console.log(words);
// console.log(words.join(','));
// console.log(words[3]);
// Expected output: "fox"
var chars = str.split('');
// console.log(chars[8]);
// Expected output: "k"
var strCopy = str.split();
console.log(strCopy);
var greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
console.log(greeting.trimStart());
console.log(greeting.trimEnd());
// Expected output: "Hello world!";
var anyString = "Mozilla";

// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
console.log(anyString.substring(3,-3));

var str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false
var date = new Date()
console.log(date)
console.log(Date.now())
console.log(date.getTime())
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
function add0(num){
  if (num<10) {
    return '0'+num
  }
  return num;
}
// 2023-11-11 10:20:30 week: 4
function getTime(spilt='-', dateStr = '') {
  var date = new Date(dateStr)
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  var d = date.getDate()
  var w = date.getDay()
  var hh = date.getHours()
  var mm = date.getMinutes()
  var ss = date.getSeconds()
  // return y+'-'+m+'-'+d+' '+hh+':'+mm+':'+ss+' week:'+w;
  return y+spilt+m+spilt+d+' '+hh+':'+add0(mm)+':'+add0(ss)+' week:'+w;
}
console.log(getTime())
console.log(getTime('-'))
console.log(getTime('/'))
var event = new Date();

event.setFullYear(1969);
event.setMonth(5);

console.log(event.getFullYear());
console.log(event.getMonth() + 1);

function setDate(){
  var event = new Date();
  event.setFullYear(2044);
  event.setMonth(5);
  event.setDate(6);
  event.setHours(6);
  event.setMinutes(6);
  event.setSeconds(6);
  return event;
}
var mySetDate = setDate()
console.log(mySetDate)
// console.log(getTime(mySetDate))
console.log(getTime('-', mySetDate))
console.log(new Date())
console.log(new Date('2044-1-1 12:12:12'))
console.log(new Date('Thu Apr 27 2025 21:19:04 GMT+0800 (中国标准时间)'))
console.log(Math.PI)
const P = Math.PI
var Pv = Math.PI
let Pl = Math.PI
console.log(P)
console.log(Pv)
console.log(Pl)
var Pv = 123
Pl = 123
console.log(Pl)
console.log(Math.abs(12))
console.log(Math.abs(-12))
console.log(Math.ceil(.95));
console.log(Math.random())
function getRandomArbitrary(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r)
}
console.log(getRandomArbitrary(1,10))
console.log(Math.max(1, 3, 2));
console.log(Math.max());