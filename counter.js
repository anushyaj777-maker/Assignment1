/*/let a = 10;
function add()
{
    let a;
    console.log(a)
    const c = a + 5;
    console.log(c)
}
add();
/*/

/*/
let a = 1;
console.log(a)
let b = ++a;
console.log(b)
let c = a++;
console.log(c)
console.log(a+b+c)/*/


/*/
let a = 5
let b = 5
const c = a-b;
const d = c;
console.log(d)/*/


//console.log(a)

/*/
let user = {name : "Anushya", age:21}
const {name}=user
console.log(name)/*/


/*/const a = "5"
const b = 5
const c = a === b/*/

//console.log("1" === String(1))

/*/
Promise.resolve().then(() => {
    console.log("c");
});
console.log("d");//*/

/*/
let name=["john","Anushya","shree"]  
 const newName=name.map((name, index)=>{
    return `index of this name ${name} = ${index}`
 })
 console.log(newName)
 console.log(name)/*/

let name =[1,2,3,4,5]
const num=name.filter((name,index)=>name%2===0)
console.log(num)
console.log(name)