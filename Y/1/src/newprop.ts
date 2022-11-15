//Generics
const addId = <T>(obj: T) => {
  const id = Math.random().toString(16)
  return {
    ...obj,
    id,
  }
}
/*generics are basically data types declaration for functions that tells Ts about the type of properties about to be recieved by the functions,ok? */

const usert = {
  name: 'jach',
}
const res = addId(usert)
console.log(res)

/*A new example to make it even clearer with the help of interface */
const taddId = <T>(obj: T) => {
  const ar: string = 'hello'
  return {
    ...obj,
    ar,
  }
}

interface thisINT {
  name: string
}

const rest = taddId<thisINT>(usert)
//Now here we are providing a interface to the function which will only take an obj and obj data type, not too clear without that emmet magic

//Another Example to further extend it
const RaddId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16)
  return {
    ...obj,
    id,
  }
}
//and everything same below, now that argument will only take object and nothing else, aslo that t is kinda confusing

//Generics interface

interface newFace<T> /*it is like a function newface is the function with an arg T*/ {
  name: string
  data: T
}

const newUsert: newFace/*line 45 means here, line 54 leads to here, we need to provide new argument here */ <{meta: string}>/*reason for line 56 */ = {
  name: 'woohoo',
  //without anything below
  /* Generic type 'newFace<T>' requires 1 type argument(s). */
  data: {
    meta: 'foo',
  },
}
//more things will be cleared by this example
const user2 :newFace<string[]>/*here we are using the same interface but with different data type in data */={
 name:'hello',
 data:['my','name']
}
//more clearer definition would be 
/*Generics allow us to provide different data types */

//more clearer example
interface newts<T,V>{
 name:string;
 data:T;
 meta:V;
}

const newtss:newts<{meta:string},string>={
 name:'youolo',
 data:{
  meta:'bruh'
 },
 meta:'newer'
}