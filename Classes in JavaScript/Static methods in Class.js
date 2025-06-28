class student {
    constructor(name){
        this.studentname = name;
    }
    static hello() { // static method
       return "Hello!!";
    }

    hi () {
        return "Hi " + this.studentname;
    }
}
myname = new student("Carol");
//call 'hello()' on the class student and not on the 'myname' object because 'hello()' is a static method it cannot access object
console.log(Student.hello());

// Call 'hi()' on the 'myname' object:

console.log(myname.hi());