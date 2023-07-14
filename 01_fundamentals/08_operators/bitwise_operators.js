
// 1 = 00000001 // 8 bits represents 1 byte of info in computer
// 2 = 00000010
// R = 00000011 // OR Reuslt
// R = 00000000 // AND Result


console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND



// Access Control system
// Read , Write, Execute
// 00000100 - only read permission
// 00000010 - Read + write
// 00000111 - Read + write + execute
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
// console.log(myPermission);

let message = (myPermission & readPermission)? 'yes' : 'no';

console.log(message);