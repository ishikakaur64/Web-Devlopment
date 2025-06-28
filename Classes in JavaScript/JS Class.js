class student {
    constructor(name,year) {
        this.year = name;
        this.year = year;
    }
    //creating age method for class student 
    age() {
        let date = new Date();
        return date.getFullYear() - this .year;
    }
}

// use student class with two objects

student1 = new student("Riya", 2014);
console.log("My name is " + student1.name + ". I born in " + student1.year + ". And my age is " + student1.age());