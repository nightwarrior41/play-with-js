let age = 23
console.log(typeof age)

let age1 = "23"
console.log(typeof age1)

let valueInNumber = Number(age1) //since the the value in string type is number so it can converted to number type
console.log(typeof valueInNumber)


let age2 = "23abc"
let valueInNumber2 = Number(age2)
console.log(typeof age2)
console.log(valueInNumber2) //since the age is not a number therefore the type conversion converts it to NaN value



// In case of null
let num = null
let valueInNum = Number(num) // null -> Number(null) => 0
console.log(valueInNum) // the null type to number conversion give 0 as number output
console.log(typeof valueInNum)

// In case of undefined to number type
let n1 
let valueInNum2 = Number(n1)
console.log(typeof valueInNum2)
console.log(valueInNum2) // it too converted to NaN like string containing characters do


/* 
Conclusion to make
"33" => 33
"3ab" => NaN
null => 0
undefined => NaN
*/



// Boolean conversion 

let num3 = 1 //true
let num4 = 0 //false
let num5 = 343 //ture
let str = "Hi" //true
let str1 = " " //true
let str2 = "" //false
let n2        //false
let n3 = null //false

// converting all above variable to boolean
let valInBool1 = Boolean(num3)
let valInBool2 = Boolean(num4)
let valInBool3 = Boolean(num5)
let valInBool4 = Boolean(str)
let valInBool5 = Boolean(str1)
let valInBool6 = Boolean(str2)
let valInBool7 = Boolean(n2)
let valInBool8 = Boolean(n3)

console.table([valInBool1,valInBool2,valInBool3,valInBool4,
    valInBool5,valInBool6,valInBool7,valInBool8
])

