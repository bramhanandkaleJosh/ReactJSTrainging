const arrayOfString = ["abc", "abc", "sdssd", "adsssd"];

const uniqueArray = new Set( arrayOfString.map(u => u) );

console.log("unique strings array : ",uniqueArray );