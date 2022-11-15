//Implementing Interface
interface UserIN {
  getfull(): string
}

class MpJ implements UserIN {
  protected first: string
  private last: string
  readonly unchangeble: string

  //static properties
  static readonly maxAge: number = 50
  //static props can only be checked on class and not on instances
  //ex log(Mpj.maxAge)--->works fine
  //log(newtog.maxAge)---> throws an error: Property 'maxAge' does not exist on type 'MJ'.

  constructor(first: string, last: string) {
    this.first = first
    this.last = last
    this.unchangeble = first
  }
  changeble(): void {
    // this.unchangeble = 'foo'
    /*Cannot assign to 'unchangeble' because it is a read-only property. */
  }
  getfull(): string {
    return this.first + ' ' + this.last
  }
}

const newtog = new MJ('helo', 'work')
// console.log(newtog.maxAge);

//now as first and last properties are private they cant be accessed by the log, and doesnt show up in emmet.
console.log(newtg)


//INHERITENCE

//extends means as we suspected it to behave it extends over the said class, add new props to existing on top of existing class, without adding anyhting to it, and prior class wont have anything added to extended
class Admin extends MpJ{
 private editor:string
  setEditor(editor:string):void{
  this.editor = editor
 }
 getEditor():string{
  return this.editor
 }
}
const admin = new Admin('new','pog')
console.log(admin);


//GENERICS
