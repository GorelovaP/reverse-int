module.exports = function reverse (n) {
let str = String(n);
let newStr= '';

for(var i = str.length-1; i>=0; i--){
newStr += str[i];
}

if (newStr[newStr.length - 1]==='-')
{
return newStr.slice(0, newStr.length - 1 );
}
return newStr;
}
