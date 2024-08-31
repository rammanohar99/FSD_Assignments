let a = ["aAqwertY123@" , "Ram612fhtfxdth54$" , "22ADFkbdzkjgvk!" , "0@98"];
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*]).{12,20}$/;
let matches = a.filter(b => regex.test(b));
let uniqueNumbers = [...new Set(matches)];
console.log(uniqueNumbers);