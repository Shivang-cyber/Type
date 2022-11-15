let hello: string = 'world'
hello = 'foo'

const getFull = (name: string, surname: string): string => {
  return name + ' ' + surname
}
const user: {
  name: string
  age: number /*will you write evertyhtinh here?? */
} = {
  name: 'me',
  age: 5,
}

/*enter interface, a simplified map for objects*/
interface IUser {
  /*I for interface, or can be postfix */ name: string
  age?: /*? is for making a propertuy non mandatory: take that line 19 */ number
  getmessge(): string
}
/*all properties in interface are madatory and must be in the derivatives */
const newg: IUser = {
  name: 'met',
  age: 55,
  getmessge() {
    return 'hello' + name
  },
}

const keyg: IUser = {
  name: 'bruh',
  getmessge() {
    return 'heppo' + name
  },
}
console.log(getFull('hello', 'world'), newg)

//day two

let username: string = 'alex'
let pagen: string | number = '1'
//the above used operator is Union operator which set any variable to two or more  value of varied types.

let stri: string | null = null
//the above usecase defines one usecase of union operator so as you wont have to put undefined to some variable.

//union can also be used in interfaces

const brig: IUser | null = null
//here union provides a bit more flexibilty to declare values to a varuable

//TYPE ALIASES

type ID = string
type pop = string
interface newg {
  id: ID
  //basically you set aliases and use them in placce of string so that it provides more clarity to those who are editing the code or refactoring it. one more usecase is shown below
  freq: pop[]
  name: string
}
//one more usecase is shown below
let newVar: pop[] = ['dragon', 'titans']
//here your aliases are using array so you put array after it, exactly like string[]

//combining union and aliases together
type MaybePop = pop[] | null | pop
//TADA
let drogon: MaybePop = ['hello']
drogon = 'hello'
//like this

//VOID TYPE

const doSomething = (): void => {
  console.log('doSomething')
  //as visible the function doesnt return anything and will lead to an error if something is returned
  //void is undefined or null: i believe thats what it returns, for query please uncomment below line to understand
  // return 1
}
const foo: void = undefined
const bar: void = null

//Any type

// its a silver bullet but author asks to avoid it as it can lead to bigger problems
//now it only turns off typescript watch and ts cant figure out whats in it and leaves it, basically turns into Js at this point.

const nay: any = {}

// Never Type
//its a type that never to be used or be declared only on variables or function which are never to be used, then why created it

const neverUsed = (): never => {
  console.log('hello')
  //if last line is removed, it shows this
  /* A function returning 'never' cannot have a reachable end point. */
  throw 'err'
}

//Unknown type
/*this type was introduced in ts 3 to reduce\remove the work of any */

let vAny: any = 10
let uAny: unknown = 10
let s1: string = vAny
// let s2:string = uAny
// console.log(uAny.foo());
/*last lines shows // Property 'foo' does not exist on type 'unknown'.
as unknown is unknown hence cant be worked off like this */

//type assertion
let s2: string = uAny as string
let s3: number = uAny as number

//so thats how you use unknown type
//one thing more

let pageNu: string = '1'
// let numbericPg:number = pageNu as number
/* Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first. */
//so you also have to deal with this

//what you can do is
let numbericPg: number = pageNu as unknown as number
//perfectly working with type assertion; as is also known as assertion

// /working with DOM

//consider an example
const someElement = document.querySelector('.foo')
// console.log('someElement',someElement.value);
/*this will throw an error
Property 'value' does not exist on type 'Element'.
//happens because someElement is being set to type ELement which is super or parent class and is generic and we need to define it in subclass maybe
 */
//normally to avoid, you can use
// console.log('someElement',(someElement as any).value);
//and it will work fine too but we already know thats gonna cause trouble later
// best way to do it is

const newElement = document.querySelector('.foo') as HTMLInputElement
//if your selected element is of input
console.log('newElement', newElement.value)

//same thing can be said about eventlistener, i dont have correct explaination but it goes something like this

// const someElement = document.querySelector('.foo')
someElement.addEventListener('blur', (event) => {
  // console.log('event',event.target.value);
  /* Property 'value' does not exist on type 'EventTarget'. */
  //this sort of error arises when we are checkinng if event has some attributes or properties, but in reality, the event variable here notifies parent or super class element and does not have these values?
  //so we declare another variable for that
  const target =
    event.target as HTMLInputElement /*for imput elements, choose as many or any as you like */
  console.log(target.value)
})

//Classes in TS & READONLY in TS
//classes are defined exactly like JS, with some changes, 
//first any property inside a class(if not defined as otherwise) will be public, there are three types/styles,  PUBLIC, PRIVATE, PROTECTED
//public means available throughout, 
//private means only for use of class as in example below
//protected means properties will only be used inside children and class, much like private
class MJ {
  protected first: string
  private last: string
  readonly unchangeble:string

  constructor(first:string,last:string){
   this.first = first
   this.last = last
   this.unchangeble = first
  }
  changeble():void{
    // this.unchangeble = 'foo'
    /*Cannot assign to 'unchangeble' because it is a read-only property. */
  }
  getfull(): string {
    return this.first + ' ' + this.last
  }
}

const newtg = new MJ('helo','work')
//now as first and last properties are private they cant be accessed by the log, and doesnt show up in emmet.
console.log(newtg);


